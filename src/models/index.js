import mongoose from 'mongoose'
import Users from "./Users";

const connectDb = (dbURL) => {
  return mongoose.connect(dbURL);
};

export {
  connectDb,
  Users
};