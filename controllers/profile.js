import db from '../models/Users/usersDB';

const setUserChange = async (req, res) => {
  const { userData } = req.body;
  try {
    const result = await db.setUserChange(userData);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e.message);
  }
};


export default {
  setUserChange,
};
