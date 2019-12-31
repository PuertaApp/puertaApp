const mongoose = require("mongoose");
const data = require("../routes/data.json");

exports.getData = (req, res, next) => {
  res.json(data)
};
