import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: String,
  data: String,
  grade: Number,
  comment: String,
});

export default mongoose.model('Recruiters', Schema);
