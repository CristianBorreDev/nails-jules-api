const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📌 MongoDB conectado");
  } catch (error) {
    console.error("❌ Error conectando MongoDB:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
