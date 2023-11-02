const express = require("express");
const router = express.Router();
const Student = require("../Models/Student");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");
//for creating new Customer
router.post(
  "/studentSignUp",
  [
    body("name").isLength({ min: 3 }),
    body("course"),
    body("univRoll").isNumeric(),
    body("email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //password encryption using bcrypt
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await Student.create({
        name: req.body.name,
        course: req.body.course,
        univRoll: req.body.univRoll,
        password: secPassword,
        email: req.body.email,
        gender: req.body.gender,
      });
      res.json({ success: true });
    } catch (err) {
      if (err.code === 11000 && err.keyPattern.email) {
        // If the error code is 11000 and it's for the email field
        res
          .status(400)
          .json({ success: false, message: "Email already registered" });
      } else {
        res.status(500).json({ success: false, message: "An error occurred" });
      }
    }
  }
);

module.exports = router;
