const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  socks:[{ type: mongoose.Schema.Types.ObjectId, ref: 'socks' }]
  // role:String,
  // posts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "entries",
  //   },
  // ],
});

module.exports = mongoose.model("user", userSchema);
