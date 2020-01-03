const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: "Email is required"
    },
    password: {
      type: String,
      required: "Enter a valid password"
    },
    phone: {
      type: String,
      trim: true,
      required: "Phone is required"
    },
    countryCode: {
      type: String,
      trim: true,
      required: "Country Code Required",
      default: "+1"
    },
    role: {
      type: String,
      trim: true,
      default: "buyer",
      enum: ["buyer", "agent", "rep"]
    },
    buyerId: {
      type: ObjectId,
      ref: "Buyer"
    },
    agentId: {
      type: ObjectId,
      ref: "Agent"
    },
    repId: {
      type: ObjectId,
      ref: "Rep"
    }
  },
  /* gives us "createdAt" and "updatedAt" fields automatically */
  { timestamps: true }
);

/* passportLocalMongoose takes our User schema and sets up a passport "local" authentication strategy using our email as the username field */
userSchema.plugin(passportLocalMongoose, { usernameField: "email", populateFields: ["buyerId", "agentId", "repId"] });

/* The MongoDBErrorHandler plugin gives us a better 'unique' error, rather than: "11000 duplicate key" */
// Update, this plugin was breaking and couldn't find a solution.
// userSchema.plugin(mongodbErrorHandler);

// const User = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);
