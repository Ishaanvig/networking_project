import mongoose from 'mongoose'

const bannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  }

},{timestamps:true});

export const Banner = mongoose.model('Banner', bannerSchema);





