import mongoose from 'mongoose';

const { Schema } = mongoose;

const productsSchema = new Schema({
  id: {
    type: String,
    required: [true, 'Input products id'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Input products name'],
  },
  price: {
    type: String,
    required: [true, 'Input products price'],
  },
  img: {
    type: String,
  },
  extraInfo: {
    description: {
      type: String,
    },
    date: {
      type: String,
      required: [true, 'Input products date'],
    },
    sellerId: {
      type: String,
      required: [true, 'Input products seller id'],
    },
  },
}, {
  versionKey: false,
});

const Products = mongoose.model('products', productsSchema);


export default Products;
