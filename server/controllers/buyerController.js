const mongoose = require('mongoose')
const Property = require("../models/House");

exports.getAllProperties = async (req, res) => {
    const houses = await Property.find() 
    res.json(houses);
};
