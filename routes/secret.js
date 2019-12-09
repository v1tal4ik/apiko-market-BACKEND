import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { refreshAndGetNewTokens } from '../services/authHelper';

dotenv.config();


export default (req, res) => {
  console.log('work secret');
  res.status(200).json({ status: true });
};
