const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: " First Name is required"
  },
  lastName: {
    type: String,
    trim: true,
    requried: "Last Name is required"
  },
  middleName: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Name", nameSchema);
