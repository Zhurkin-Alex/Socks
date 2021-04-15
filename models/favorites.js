const mongoose = require("mongoose");
const { Schema } = mongoose;

const favShema = new mongoose.Schema({
  color: { type: String, required: true },
  pattern:  { type: String, required: true },
  img:  { type: String, required: true },
});

module.exports = mongoose.model("favorites", favShema);
