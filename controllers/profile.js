import cloudinary from 'cloudinary';
import db from '../models/Users/usersDB';

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const setUserChange = async (req, res) => {
  const { userData } = req.body;
  try {
    const result = await db.setUserChange(userData);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const saveProfileImg = async (req, res) => {
  const imgBase64String = `data:image/gif;base64,${req.files['profile-img'].data.toString('base64')}`;
  cloudinary.uploader.upload(imgBase64String, (result) => {
    if (result.error) {
      const { http_code, message } = result.error;
      res.status(http_code).json(message);
    }
    res.status(200).json({ status: true, url: result.secure_url });
  });
};


export default {
  setUserChange,
  saveProfileImg,
};
