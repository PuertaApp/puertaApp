const Buyer = require("../models/Buyer");
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
};
