import mongoose from 'mongoose';
import env from './env';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.NODE_MONGO_URI)
    console.debug(`[DEBUG] - MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[ERROR] - ${error}`);
    console.error(`[ERROR] - Failed to connect to MongoDB.`);
    console.debug(`[DEBUG] - Mongo URI: ${env.NODE_MONGO_URI}`);
    process.exit(1);
  }
}

export default connectDB;