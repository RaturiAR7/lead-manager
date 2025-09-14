import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectToDb = async () => {
  dotenv.config();
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("MongoDB connection error ❌", error);
    process.exit(1); // Exit process with failure
  }
};
