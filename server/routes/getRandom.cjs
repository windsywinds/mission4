const express = require("express");
const carUrls = require("../data/randomUrls.cjs");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("request for randomUrl!");
  const randomIndex = Math.floor(Math.random() * carUrls.length);
  const randomCar = carUrls[randomIndex].imgUrl;

  console.log(randomCar);
  res.status(200).json(randomCar);
});

module.exports = router;
