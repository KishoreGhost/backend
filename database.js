require("dotenv").config();

const mongoose = require("mongoose");

const contectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { contectToDB };
