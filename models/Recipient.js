const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientScema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientScema;
