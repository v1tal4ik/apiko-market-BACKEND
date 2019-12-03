import dotenv from 'dotenv';
import db from '../models/Users/usersDB';
import { generateAccessToken, generateRefreshToken } from '../services/authHelper';

dotenv.config();

const getUserByEmail = async (req, res) => {
  const { email } = req.query;
  try {
    const user = await db.getUserByEmail({ email });
    res.status(200).json({ status: true, user });
  } catch (e) {
    res.status(404).json({ status: false, msg: e.message });
  }
};


const isPassValid = async (req, res) => {
  const { email, password } = req.query;
  try {
    const response = await db.isPassValid({ email, password });
    res.status(200).json(response);
  } catch (e) {
    res.status(404).json(false);
  }
};

const singInById = async (req, res) => {
  try {
    const { id } = req.query;
    const accessToken = generateAccessToken(id);
    const refreshToken = generateRefreshToken();
    const response = await db.replaceTokenById({ id, refreshToken });
    res.cookie(id, JSON.stringify({ accessToken, refreshToken }), { httpOnly: true });
    res.status(200).json(response);
  } catch (e) {
    res.status(501).json({ status: false, msg: e.message });
  }
};


const isEmailUnique = async (req, res) => {
  const { email } = req.query;
  try {
    const response = await db.isEmailUnique({ email });
    res.status(200).json(response);
  } catch (e) {
    res.status(406).json({ status: false, msg: e.message });
  }
};

const addNewUser = async (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    const response = await db.addNewUser({ email, fullName, password });
    res.status(201).json(response);
  } catch (e) {
    res.status(501).json({ status: false, msg: e.message });
  }
};


export default {
  getUserByEmail,
  isPassValid,
  singInById,
  isEmailUnique,
  addNewUser,
};
