import mongoose from 'mongoose';


const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    required: [true, 'Input id'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Input email'],
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, 'Input full name'],
  },
  password: {
    type: String,
    required: [true, 'Input password'],
  },
  salt: {
    type: String,
  },
  img: {
    type: String,
  },
  phone: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  favProducts: [String],
}, {
  versionKey: false,
});

const Users = mongoose.model('users', userSchema);


export default Users;
