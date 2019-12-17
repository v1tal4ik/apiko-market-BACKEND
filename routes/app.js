import express from 'express';
import market from '../controllers/market';
import profile from '../controllers/profile';


const router = express.Router();

router.get('/tours', market.getTours);
router.patch('/profile', profile.setUserChange);


export default router;
