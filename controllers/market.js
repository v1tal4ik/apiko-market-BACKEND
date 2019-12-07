import db from '../models/Tours/toursDB';


const getTours = async (req, res) => {
  try {
    const result = await db.getAllTours();
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json(e);
  }
};


export default {
  getTours,
};
