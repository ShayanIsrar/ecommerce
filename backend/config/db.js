const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://shayanisrar719:TkSgeGxTXVSWcZv5@cluster0.8tgmm.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0');
  } catch (error) {
    console.error("DataBase : ", error);
  }
};
module.exports = connectDB;
