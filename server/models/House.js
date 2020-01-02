const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const houseSchema = new mongoose.Schema(
  {
    likes: [
      {
        type: ObjectId,
        ref: "Buyer",
        default: 0
      }
    ],
    bedrooms: {
      type: Number,
      required: "Number of bedrooms required"
    },
    bathrooms: {
      type: Number,
      required: "Number of bathrooms required"
    },
    size: {
      type: Number,
      required: "Size of house required in sqft"
    },
    zipcode: {
      type: Number,
      required: "Zipcode is required"
    },
    city: {
      type: String,
      trim: true,
      required: "City is required"
    },
    state: {
      type: String,
      trim: true,
      required: "State is requrired"
    },
    streetAddress: {
      type: String,
      trim: true,
      required: "Address is requrired"
    },
    price: {
      type: Number,
      required: "Price Required"
    },
    postedBy: {
      type: ObjectId,
      ref: "Rep"
    }
  },
  { timestamps: true }
);

const autoPopulatePostedBy = function(next) {
  this.populate("postedBy", "_id name avatar");
  next();
};

houseSchema.pre("findOne", autoPopulatePostedBy);

/* passportLocalMongoose takes our User schema and sets up a passport "local" authentication strategy using our email as the username field */
// userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

/* The MongoDBErrorHandler plugin gives us a better 'unique' error, rather than: "11000 duplicate key" */
// Update, this plugin was breaking and couldn't find a solution.
// userSchema.plugin(mongodbErrorHandler);

const Property = mongoose.model("House", houseSchema);
module.exports = Property
