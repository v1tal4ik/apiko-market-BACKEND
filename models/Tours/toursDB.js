import uuidv4 from 'uuid/v4';
import Tours from './toursScema';


const getAllTours = async () => {
  const doc = await Tours.find({});
  if (doc.length) {
    return Promise.resolve(doc);
  }
  return Promise.reject(new Error('The Tours not found:('));
};


const addNewTour = async ({
  name, location, description, img, price, date, sellerId,
}) => {
  const tour = new Tours({
    id: uuidv4(),
    name,
    price,
    img,
    location,
    extraInfo: {
      description,
      date,
      sellerId,
    },
  });
  const doc = await tour.save();
  if (doc._id) {
    return Promise.resolve({ status: true, message: `${doc.name} tour was successfuly added :)` });
  }
  return Promise.reject();
};


export default {
  getAllTours,
  addNewTour,
};
