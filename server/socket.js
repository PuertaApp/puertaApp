const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const next = require("next");
const session = require("express-session");
const mongoose = require("mongoose");
const logger = require("morgan");
const mongoSessionStore = require("connect-mongo");
const expressValidator = require("express-validator");
const passport = require("passport");
const helmet = require("helmet");
const compression = require("compression");

/* Loads all variables from .env file to "process.env" */
require("dotenv").config();
/* Require our models here so we can use the mongoose.model() singleton to reference our models across our app */
require("./models/Post");
require("./models/User");
const routes = require("./routes");
require("./passport");

const app = express();
const server = http.Server(app);
const io = socketio(server);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

const { join } = require('path')
const { parse } = require('url')

const port = parseInt(process.env.PORT, 10) || 3000

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose
  .connect(
    process.env.MONGO_URI,
    mongooseOptions
  )
  .then(() => console.log("DB connected"));

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

nextApp.prepare().then(() => {
    if (!dev) {
      /* Helmet helps secure our app by setting various HTTP headers */
      app.use(helmet());
      /* Compression gives us gzip compression */
      app.use(compression());
    }
    /* Body Parser built-in to Express as of version 4.16 */
    app.use(express.json());
    /* Express Validator will validate form data sent to the backend */
    app.use(expressValidator());
    /* give all Next.js's requests to Next.js server */
    app.get("/_next/*", (req, res) => {
      nextHandler(req, res);
    });
    app.get("/static/*", (req, res) => {
      nextHandler(req, res);
    });
    const MongoStore = mongoSessionStore(session);
    const sessionConfig = {
      name: "next-connect.sid",
      // secret used for using signed cookies w/ the session
      secret: process.env.SESSION_SECRET,
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 14 * 24 * 60 * 60 // save session for 14 days
      }),
      // forces the session to be saved back to the store
      resave: false,
      // don't save unmodified sessions
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14 // expires in 14 days
      }
    };

    if (!dev) {
      sessionConfig.cookie.secure = true; // serve secure cookies in production environment
      app.set("trust proxy", 1); // trust first proxy
    }

    /* Apply our session configuration to express-session */
    app.use(session(sessionConfig));

    /* Add passport middleware to set passport up */
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
      /* custom middleware to put our user data (from passport) on the req.user so we can access it as such anywhere in our app */
      res.locals.user = req.user || null;
      next();
    });
  
    /* morgan for request logging from client
    - we use skip to ignore static files from _next folder */
    app.use(
      logger("dev", {
        skip: req => req.url.includes("_next")
      })
    );

    /* apply routes from the "routes" folder */
    app.use("/", routes);

    /* Error handling from async / await functions */
    app.use((err, req, res, next) => {
      const { status = 500, message } = err;
      res.status(status).json(message);
    });

    /* create custom routes with route params */
    app.get("/profile/:userId", (req, res) => {
      const routeParams = Object.assign({}, req.params, req.query);
      return app.render(req, res, "/profile", routeParams);
    });

    // Custom route to test 
    app.get('/custom', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(JSON.stringify({ name: 'Custom route From Express Server' }))
      return 
    })
    /* default route
     - allows Next to handle all other routes
     - includes the numerous `/_next/...` routes which must    be exposedfor the next app to work correctly
     - includes 404'ing on unknown routes */
    
    // app.get("*", (req, res) => {
    //   nextHandler(req, res);
    // });

    
    // catch all for routes not explicitly assigned above 
    app.all("*", (req, res) => {        
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl
      console.log(`pathname is ${pathname}`)
      // this is required to ensure the service worker is served
      if (pathname === '/service-worker.js') {
        console.log('getting sw!')
        const filePath = join('/app/.next', pathname)
        console.log(`file path is ${filePath}`)
        nextApp.serveStatic(req, res, filePath)                
      } else {
        // if we've gotten this far, then nextjs should serve up a page
        nextHandler(req, res, parsedUrl)
      }    
    })   

    server.listen(port, err => {
        if (err) throw err;
        console.log(`Server listening on port ${port}`);
    })
})

const takers = [];
const givers = [];

io.on("connect", socket => {
    console.log("Received a " + socket.handshake.query.role + " connection: " + socket.id);

    if (socket.handshake.query.role !== "taker" && socket.handshake.query.role !== "giver") {
        console.log("Unsupported role " + socket.handshake.query.role);
    }

    if (socket.handshake.query.role === 'taker') {
        takers.push(socket);
        givers.forEach(giver => giver.emit('takers', takers.length));
    }

    if (socket.handshake.query.role === 'giver') {
        givers.push(socket);
        if (givers.length > 1) {
            console.log("Too many cooks in the kitchen");
        }

        socket.emit('takers', takers.length);
    }

    socket.on('disconnect', (reason) => {
        const takerIdx = takers.indexOf(socket);
        if (takerIdx !== -1) {
            takers.splice(takerIdx, 1);
        }
        const giverIdx = givers.indexOf(socket);
        if (giverIdx !== -1) {
            givers.splice(giverIdx, 1);
        }
    });

    socket.on('trivia_question', data => {
        console.log('got trivia question ' + JSON.stringify(data));
        takers.forEach(taker => taker.emit('trivia_question', data));
    });

    socket.on('answer', data => {
        console.log('got answer ' + JSON.stringify(data));
        givers.forEach(giver => giver.emit('answer', data));
    });
})