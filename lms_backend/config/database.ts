import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.DB_URI;

  if (!uri) {
    throw new Error("DB_URI is missing in .env file");
  }

  await mongoose.connect(uri);

  console.log("✅ MongoDB connected");
}
