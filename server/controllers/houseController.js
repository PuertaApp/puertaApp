const mongoose = require("mongoose");
const Property = require("../models/House");
const User = mongoose.model("User");

exports.validateHouseWrite = (req, res, next) => {
  if (!req.body.userId) {
    return res.status(403).json({
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

exports.getPropertyId = async (req, res, next) => {
  try {
    const propertyId = req.params.id;
    if (!propertyId) {
      return res.status(401).json({ error: "Please Provide A Property Id" });
    }
    const property = await Property.findOne({ _id: propertyId });
    if (!property) {
      return res
        .status(401)
        .json({ error: "A property was not found with that ID" });
    }
    res.property = property;
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.postNewProperty = async (req, res) => {
  try {
    const property = await Property.create({
      ...req.body,
      postedBy: req.body.userId
    });
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.editProperty = async (req, res) => {
  if (Object.values(req.body).length <= 0) {
    return res.status(401).json({ error: "Please provide house information" });
  }
  try {
    const property = await Property.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json(property);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    await Property.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Property Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getAllLeadsById = async (req, res) => {
  res.status(200).json(req.property.leads);
};

// exports.addToViewedPropertiesLeads = async (req,res) => {
//   const userId = req.body.userId
//   if(!userId){
//     return res.status(401).json({error: "Please provide an id"})
//   }
//   const user = await User.findById(userId);
//   if(!user){
//     return res.status(401).json({error: "There is no user with that id"})
//   }
//   if(user.role !== "buyer"){
//     return res.status(403).json({error: "Only buyers get added to leads when they look at the property"})
//   }
// }
