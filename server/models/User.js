const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
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

// const autoPopulateInfo = function(next) {
//   if(this.role === "buyer"){
//     this.populate("buyer", "_id name avatar");
//   }
//   this.populate("followers", "_id name avatar");
//   next();
// };

// userSchema.pre("findOne", autoPopulateInfo);

/* passportLocalMongoose takes our User schema and sets up a passport "local" authentication strategy using our email as the username field */
userSchema.plugin(passportLocalMongoose, { usernameField: "phone" });

/* The MongoDBErrorHandler plugin gives us a better 'unique' error, rather than: "11000 duplicate key" */
// Update, this plugin was breaking and couldn't find a solution.
// userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("User", userSchema);
