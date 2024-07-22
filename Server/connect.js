const mongoose = require("mongoose");
function handleConnection(url) {
  return mongoose.connect(url);
}
module.exports = handleConnection;
