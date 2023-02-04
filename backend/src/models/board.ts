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
  bgcolor: {
    type: String,
    required: false,
  },
  bgimage: {
    type: String,
    required: false,
  }
}, { versionKey: false });

export default mongoose.model('Board', boardScheme);