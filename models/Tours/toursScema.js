import mongoose from 'mongoose';

const { Schema } = mongoose;

const toursSchema = new Schema({
  id: {
    type: String,
    required: [true, 'Input tours id'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Input tours name'],
  },
  price: {
    type: String,
    required: [true, 'Input tours price'],
  },
  img: {
    type: String,
  },
  location: {
    type: String,
    required: [true, 'Input tours price'],
  },
  extraInfo: {
    description: {
      type: String,
    },
    date: {
      type: String,
      required: [true, 'Input tours date'],
    },
    sellerId: {
      type: String,
      required: [true, 'Input tours seller id'],
    },
  },
}, {
  versionKey: false,
});

const Tours = mongoose.model('tours', toursSchema);


export default Tours;
