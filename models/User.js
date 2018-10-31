const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { Scema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
