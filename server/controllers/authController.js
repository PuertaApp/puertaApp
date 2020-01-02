const mongoose = require("mongoose");
const User = mongoose.model("User");
const passport = require("passport");
const Name = require("../models/Name");
const Buyer = require("../models/Buyer");

exports.validateSignup = (req, res, next) => {
  // req.sanitizeBody("name");
  // req.sanitizeBody("email");
  // req.sanitizeBody("password");

  // Name is non-null and is 4 to 10 characters
  // req.checkBody("name", "Enter a name").notEmpty();
  // req
  //   .checkBody("name", "Name must be between 4 and 10 characters")
  //   .isLength({ min: 4, max: 10 });

  // Email is non-null, valid, and normalized
  req
    .checkBody("email", "Enter a valid email")
    .isEmail()
    .normalizeEmail();

  // Password must be non-null, between 4 and 10 characters
  req.checkBody("password", "Enter a password").notEmpty();
  req
    .checkBody("password", "Password must be between 4 and 10 characters")
    .isLength({ min: 4, max: 10 });

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).send(firstError);
  }
  next();
};

exports.signup = async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  const splittedName = name.trim().split(" ");
  let newName;
  if (splittedName.length === 2) {
    newName = Name.create({
      firstName: splittedName[0],
      lastName: splittedName[1],
      middleName: null
    });
  } else if (splittedName.length === 3) {
    newName = Name.create({
      firstName: splittedName[0],
      lastName: splittedName[2],
      middleName: splittedName[1]
    });
  }
  const user = await new User({
    name: (await newName)._id,
    email,
    password,
    phone,
    password,
    role
  });

  if (user.role === "agent") {
    // TO DO
  } else if (user.role === "rep") {
    // TO DO
  } else {
    const buyer = await Buyer.create({
      name: (await newName)._id
    });
    user.buyerId = (await buyer)._id;
  }

  await User.register(user, password, async (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
    res.status(200).json(user);
  });
};

exports.signin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (!user) {
      return res.status(400).json(info.message);
    }

    req.logIn(user, err => {
      if (err) {
        return res.status(500).json(err.message);
      }

      res.json(user);
    });
  })(req, res, next);
};

exports.signout = (req, res) => {
  res.clearCookie("next-cookie.sid");
  req.logout();
  res.json({ message: "You are now signed out!" });
};

exports.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/signin");
};
