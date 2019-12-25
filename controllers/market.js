import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import db from '../models/Tours/toursDB';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const getTours = async (req, res) => {
  try {
    const result = await db.getAllTours();
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json(e);
  }
};

const addNewTour = async (req, res) => {
  try {
    const result = await db.addNewTour(req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
};

const saveTourImg = async (req, res) => {
  const imgBase64String = `data:image/gif;base64,${req.files['tour-img'].data.toString('base64')}`;
  cloudinary.uploader.upload(imgBase64String, (result) => {
    if (result.error) {
      const { http_code, message } = result.error;
      res.status(http_code).json(message);
    }
    res.status(200).json({ status: true, url: result.secure_url });
  });
};


export default {
  getTours,
  addNewTour,
  saveTourImg,
};
