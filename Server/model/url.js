const mongoose = require("mongoose");
const URLschema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      unique: true,
      required: true,
    },
    extendedURL: {
      required: true,
      type: String,
    },
    clickCount: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);
const URL = mongoose.model("url", URLschema);
module.exports = URL;
