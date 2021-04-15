const mongoose = require("mongoose");
const { Schema } = mongoose;

const socksSchema = new mongoose.Schema({
  color: { type: String, required: true },
  pattern:  { type: String, required: true },
  img:  { type: String, required: true },
  count:{type:Number, default:1},
});

module.exports = mongoose.model("socks", socksSchema);
