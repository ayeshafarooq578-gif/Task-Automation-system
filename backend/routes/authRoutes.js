const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getInterns,
} = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/interns", getInterns);

module.exports = router;