const express = require("express");
const router = express.Router();
const Admin = require("../Models/Admin");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "tfuhtlpzhiopuhchukaopzdlizpalpzn";

router.post(
  "/adminLogin",
  [
    body("email").isEmail(),
    body("password", "Password should be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const email = req.body.email;
      const userData = await Admin.findOne({ email });

      if (!userData) {
        //console.log("User not found");
        return res.status(401).json({ error: "Incorrect credentials" });
      }

      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (!isPasswordValid) {
        //console.log("password wrong");
        return res.status(401).json({ error: "Incorrect credentials" });
      }
      const data = {
        studentUser: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      return res.json({ success: true, authToken: authToken });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;
