import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = process.env.MONGO_URL;

    if (!db) {
      throw new Error("MongoDB connection string (MONGO_URL) is undefined.");
    }

    const { connection } = await mongoose.connect(db);

    console.log(`MongoDB Connected to ${connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exitCode = 1; // Set exit code without forcing an immediate exit
  }
};
