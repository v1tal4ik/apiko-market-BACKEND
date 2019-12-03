import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { refreshAndGetNewTokens } from '../services/authHelper';

dotenv.config();


export default (req, res) => {
  console.log('work secret');
  res.status(200).json({ status: true });
  // try {
  //   const propsCookie = Object.keys(req.cookies);
  //   const id = propsCookie.find(elem => elem === req.query.id);
  //   const { accessToken, refreshToken } = JSON.parse(req.cookies[id]);


  //   jwt.verify(accessToken, process.env.SECRET_WORD, { ignoreExpiration: false }, async (err) => {
  //     if (err && err.name === 'TokenExpiredError') {
  //       refreshAndGetNewTokens({ id, refreshToken })
  //         .then((tokens) => {
  //           res.cookie(id, JSON.stringify(tokens), { httpOnly: true });
  //           res.status(200).json({ status: true });
  //         })
  //         .catch((e) => {
  //           res.status(401).json({ status: false, msg: e.message });
  //         });
  //     } else {
  //       res.status(200).json({ status: true });
  //     }
  //   });
  // } catch (e) {
  //   res.status(501).json({ status: false, msg: e.message });
  // }
};
