const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const agentSchema = new mongoose.Schema(
  {
    name: {
      type: ObjectId,
      ref: "Name"
    },
    recentSales: {
      type: Number,
      required: "Recent Sales Is Required",
      default: 0, 
    },
    availability: [{
      date: {type: Date, default: new Date().getDate()},
      time: [{type: String, default: ["9:00AM", "12:00PM", "4:00PM"]}]
    }],
    headline: {
      type: String, 
      trim: true,
      //required: "Headline is required for agents", //// REQUIRED OR NOT?
      default: ""
    },
    description: {
      type: String, 
      trim: true,
      // required: "Description is requrired for agents" , //// REQUIRED OR NOT?
      default: ""
    },
    leads: [{ type: ObjectId, ref: "Buyer", default: [] }],
    userId: {
      type: ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const autoPopulateInfo = function(next) {
  this.populate("userId", "_id name avatar");
  this.populate("name", "_id firstName middleName lastName")
  next();
};

agentSchema.pre("findOne", autoPopulateInfo);

/* passportLocalMongoose takes our User schema and sets up a passport "local" authentication strategy using our email as the username field */
// agentSchema.plugin(passportLocalMongoose, { usernameField: "email" });

/* The MongoDBErrorHandler plugin gives us a better 'unique' error, rather than: "11000 duplicate key" */
// Update, this plugin was breaking and couldn't find a solution.
// agentSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("Agent", agentSchema);