import express from 'express';
import market from '../controllers/market';
import user from '../controllers/user';


const router = express.Router();

router.get('/tours', market.getTours);

router.patch('/profile', user.setUserChange);
router.post('/profile/img', user.saveUserImg);


export default router;
