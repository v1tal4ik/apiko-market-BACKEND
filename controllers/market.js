import db from '../models/Products/productsDB';


const getItemList = async (req, res) => {
  try {
    const result = await db.getItems();
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json(e);
  }
};


export default {
  getItemList,
};
