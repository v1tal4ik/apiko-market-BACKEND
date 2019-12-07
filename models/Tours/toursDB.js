import uuidv4 from 'uuid/v4';
import Tours from './toursScema';


const getAllTours = async () => {
  const doc = await Tours.find({});
  if (doc.length) {
    return Promise.resolve(doc);
  }
  return Promise.reject(new Error('The Tours not found:('));
};


const addNewProduct = async () => {
  const product = new Tours({
    id: uuidv4(),
    name: 'item tour',
    price: 123,
    img: '../../img/item/sea.jpg',
    location: 'asia',
    extraInfo: {
      description: '',
      date: '2019-12-01',
      sellerId: '12345116',
    },
  });
  const doc = await product.save();
  console.log(doc);
};


export default {
  getAllTours,
  addNewProduct,
};
