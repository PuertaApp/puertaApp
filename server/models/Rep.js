const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    housesListed: [{ type: ObjectId, ref: "House" }],
    leadsFavorited: [{ type: ObjectId, ref: "Buyer" }],
    leadsViewed: [{ type: ObjectId, ref: "Buyer" }],
    headline: {
      type: String,
      trim: true,
      required: "Headline is required for reps", //// REQUIRED OR NOT?
      default: "No Headline"
    },
    description: {
      type: String,
      trim: true,
      required: "Description is requrired for reps", //// REQUIRED OR NOT?
      default: "No Description"
    },
    userId: {
      type: ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const autoPopulateUser = function(next) {
  this.populate("userId", "_id name avatar")
  next();
};

userSchema.pre("findOne", autoPopulateUser);

/* passportLocalMongoose takes our User schema and sets up a passport "local" authentication strategy using our email as the username field */
// userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

/* The MongoDBErrorHandler plugin gives us a better 'unique' error, rather than: "11000 duplicate key" */
// Update, this plugin was breaking and couldn't find a solution.
// userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("Rep", userSchema);
