import dotenv from 'dotenv';

// Init environment variables
dotenv.config();

const env = {
  PORT : process.env.PORT || `5000`,
  NODE_ENV : process.env.NODE_ENV,
  NODE_MONGO_URI : process.env.NODE_MONGO_URI || ``,
}

export default env;