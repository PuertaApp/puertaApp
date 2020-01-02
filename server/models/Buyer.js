const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: ObjectId,
      ref: "Name"
    },
    favoriteHouses: [{ type: ObjectId, ref: "House" }],
    viewedHouses: [{ type: ObjectId, ref: "House" }],
    dislikedHouses: [{ type: ObjectId, ref: "House" }],
    userId: {
      type: ObjectId,
      ref: "User"
    }
  },
  /* gives us "createdAt" and "updatedAt" fields automatically */
  { timestamps: true }
);

const autoPopulateInfo = function(next) {
  this.populate("userId", "_id name avatar");
  this.populate("name", "_id firstName middleName lastName");
  next();
};

userSchema.pre("findOne", autoPopulateInfo);

/* passportLocalMongoose takes our User schema and sets up a passport "local" authentication strategy using our email as the username field */
// userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

/* The MongoDBErrorHandler plugin gives us a better 'unique' error, rather than: "11000 duplicate key" */
// Update, this plugin was breaking and couldn't find a solution.
// userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("Buyer", userSchema);
