const mongoose = require('mongoose')
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const Buyer = require("../models/Buyer");
const Agent = require("../models/Agent");
const User = require("../models/User");
const Property = require("../models/House");

//// ADD TO FAVORITES OR TO DISLIKES
exports.dislikeProperty = async (req, res) => {
  const propertyId = req.params.id;
  const { buyerId } = req.body;
  console.log(req.body);
  console.log(buyerId);
  console.log(propertyId);
  if (!buyerId) {
    return res.status(401).json({ error: "Please provide the buyer id" });
  }
  if (!propertyId) {
    return res
      .status(401)
      .json({ error: "Please provide the property id in the url" });
  }
  try {
    const property = await Property.findById({ _id: propertyId });
    if (!property) {
      return res.status(401).json({ error: "No such property with that id" });
    }
    const buyerProfile = await Buyer.findById(buyerId);

    if (buyerProfile.dislikedHouses.includes(propertyId)) {
      console.log("It's running Have it");
      const houseToDislike = buyerProfile.dislikedHouses.filter(
        id => id === propertyId
      );
      console.log(houseToDislike);
      const updatedBuyer = await Buyer.findOneAndUpdate(
        { _id: buyerId },
        {
          dislikedHouses: houseToDislike
        },
        { new: true }
      );
      return res.status(200).json(updatedBuyer);
    } else {
      console.log("It's running Does not have it");
      console.log(buyerProfile.dislikedHouses);
      buyerProfile.dislikedHouses.push(propertyId);
      console.log(buyerProfile.dislikedHouses);
      const updatedBuyer = await Buyer.findOneAndUpdate(
        { _id: buyerId },
        {
          dislikedHouses: buyerProfile.dislikedHouses
        },
        { new: true }
      );
      return res.status(200).json(updatedBuyer);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.favoriteProperty = async (req, res) => {
  const propertyId = req.params.id;
  const { buyerId } = req.body;
  if (!buyerId) {
    return res.status(401).json({ error: "Please provide the buyer id" });
  }
  if (!propertyId) {
    return res
      .status(401)
      .json({ error: "Please provide the property id in the url" });
  }
  try {
    const property = await Property.findById({ _id: propertyId });
    if (!property) {
      return res.status(401).json({ error: "No such property with that id" });
    }
    const buyerProfile = await Buyer.findById(buyerId);

    if (buyerProfile.favoriteHouses.includes(propertyId)) {
      console.log("It's running Have it");
      const houseToFavarite = buyerProfile.favoriteHouses.filter(
        id => id === propertyId
      );
      const updatedBuyer = await Buyer.findOneAndUpdate(
        { _id: buyerId },
        {
          favoriteHouses: houseToFavarite
        },
        { new: true }
      );
      return res.status(200).json(updatedBuyer);
    } else {
      buyerProfile.favoriteHouses.push(propertyId);
      const updatedBuyer = await Buyer.findOneAndUpdate(
        { _id: buyerId },
        {
          favoriteHouses: buyerProfile.favoriteHouses
        },
        { new: true }
      );
      return res.status(200).json(updatedBuyer);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}

exports.getAllProperties = async (req, res) => {
    const houses = await Property.find()
    res.json(houses);
}

exports.assignAgent = async (req, res) => {
    const { body: { buyerId } } = req

    const agent = await Agent.aggregate([{ $sample: { size: 1 } }])

    const buyerUpdate = { agentId: agent[0]._id }

    const updatedBuyer = await Buyer.findByIdAndUpdate(
        { _id: buyerId },
        { $set: buyerUpdate },
        { new: true, runValidators: true }
    );

    const getAgent = await Agent.findById(agent[0]._id)

    getAgent.buyers.push(buyerId)

    const agentUpdate = { buyers: getAgent.buyers}

    const updatedAgent = await Agent.findByIdAndUpdate(
        { _id: agent[0]._id },
        { $set: agentUpdate },
        { new: true, runValidators: true }
    );
    
    res.json({ updatedBuyer, updatedAgent });
}

const assignAgent = async (buyerId) => {
    // const { body: { buyerId } } = req

    const agent = await Agent.aggregate([{ $sample: { size: 1 } }])

    const buyerUpdate = { agentId: agent[0]._id }

    const updatedBuyer = await Buyer.findByIdAndUpdate(
        { _id: buyerId },
        { $set: buyerUpdate },
        { new: true, runValidators: true }
    );

    const getAgent = await Agent.findById(agent[0]._id)

    getAgent.buyers.push(buyerId)

    const agentUpdate = { buyers: getAgent.buyers}

    const updatedAgent = await Agent.findByIdAndUpdate(
        { _id: agent[0]._id },
        { $set: agentUpdate },
        { new: true, runValidators: true }
    );
    
    return { updatedBuyer, updatedAgent };
}

const sendSMS = async (message, to) => {
    client.messages
    .create({
        body: message,
        from: process.env.TWILIO_PHONE,
        to: to
    })
    .then(message => console.log(message.sid));
}

exports.confirmAppointmentWithAgent = async (req, res) => {
    const { body: { buyerId, propertyId } } = req
    
    await assignAgent(buyerId)

    const buyer = await Buyer.findById(buyerId)
    const agent = await Agent.findById(buyer.agentId)
    const agentUser = await User.findById(agent.userId)
    const property = await Property.findById(propertyId)

    const agentMessage = `${buyer.name.firstName} (buyer) is requesting a showing of 
    ${property.streetAddress} (home).

    Please meet them at the home:
    ${property.streetAddress}
    ${property.city} ${property.state} ${property.zipcode}

    `

    // SMS to Buyer’s Rep Agent
    await sendSMS(agentMessage, agentUser.phone)

    res.json({ message: 'successful'})
}
