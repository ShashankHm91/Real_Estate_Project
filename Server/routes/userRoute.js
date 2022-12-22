const express = require("express");
const userModal = require("../Schema/userSchema");
const router = express.Router();
const jwt = require("jsonwebtoken");
const signupModel = require("../Schema/signupSchema");

router.post("/addproperty", async (req, res) => {
  try {
    const users = new userModal(req.body);
    const createUser = await users.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send("Error in catch");
    console.log(e);
  }
});

router.get("/property", async (req, res) => {
  console.log(`This is cookie from backend ${req.headers.authorization}`);
  try {
    const token = req.headers.authorization;
    const verifyToken = jwt.verify(token, process.env.SC_KEY);
    console.log(verifyToken);
    if (verifyToken) {
      console.log(verifyToken);
      const userDetail = await signupModel.find({ email: verifyToken });

      if (userDetail.length) {
        const propertyData = await userModel.find();
        res.status(200).send({ property: propertyData, userData: userDetail });
        console.log(userDetail);
      } else {
        res.status(409).send("User not Unauthorized");
      }
      console.log(userDetail);
    } else {
      res.status(409).send("Unauthorized user");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
    console.log(err);
  }
});

module.exports = router;
