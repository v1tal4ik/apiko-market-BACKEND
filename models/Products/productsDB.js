import uuidv4 from 'uuid/v4';
import Products from './productsScema';


const getItems = async () => {
  const doc = await Products.find({});
  if (doc.length) {
    return Promise.resolve(doc);
  }
  return Promise.reject(new Error('The products not found:('));
};


const addNewProduct = async () => {
  const product = new Products({
    id: uuidv4(),
    name: 'bar',
    price: 123.456,
    img: '../../img/item/sea.jpg',
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
  getItems,
  addNewProduct,
};
