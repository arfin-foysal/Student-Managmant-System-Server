const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    },
  studentId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  number: {
    type: Number,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
  },
  images: {
    type: String,
  },
  dob: {
    type: Date,
    default: Date.now,
  },
  Gender: {
    type: String,
  },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
