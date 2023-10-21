const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  course: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  univRoll: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("students", StudentSchema);
