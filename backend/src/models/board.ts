import mongoose from 'mongoose';

const { Schema } = mongoose;
const boardScheme = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  users: {
    type: [String],
    required: true,
  },
  bgColor: {
    type: String,
    required: false,
  },
  bgImg: {
    type: String,
    required: false,
  }
}, { versionKey: false });

export default mongoose.model('Board', boardScheme);