const mongoose = require("mongoose");
const { Schema } = mongoose;

const socksSchema = new mongoose.Schema({
  color: { type: String, required: true },
  pages:  { type: String, required: true },
  uzor:  { type: String, required: true }
});

module.exports = mongoose.model("socks", userSchema);
