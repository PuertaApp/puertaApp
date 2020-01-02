const mongoose = require("mongoose");
const Property = require("../models/House");

exports.validateHouseWrite = (req, res, next) => {
  if (!req.body.userId) {
    return res.status(403).json({
      status: "Failed",
      error: "Please provide user role and user id"
    });
  }
  // if (req.body.role !== "rep") {
  //   return res.status(403).json({
  //     status: "Failed",
  //     error: "You have to be a rep to be able to add, remove or edit a property"
  //   });
  // }
  next();
};

exports.postNewProperty = async (req, res) => {
  try {
    const property = await Property.create({
      ...req.body,
      postedBy: req.body.userId
    });
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ status: "Error", error: error });
  }
};
