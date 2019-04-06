import mongoose from 'mongoose';
const { body } = require('express-validator/check')

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  }
});

const Users = mongoose.model('Users', userSchema)

Users.syncIndexes()

export default Users