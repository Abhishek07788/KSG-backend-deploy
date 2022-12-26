const mongoose = require("mongoose");
// -------------- (MongoDb Connection) -------------
const connect = () => {
  return mongoose.connect(process.env.MONGOURL);
};

module.exports = connect;
