const mongoose = require("mongoose");
const cardSchema = mongoose.Schema({
  name: { required: true, type: String },
  description: { required: true, type: String },

  option: { required: true, type: String },

  duration: { required: true, type: String },

  date: { required: true, type: String },
});
module.exports = mongoose.model("ShowActivity", cardSchema);