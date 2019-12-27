import express from 'express';
import market from '../controllers/market';
import user from '../controllers/user';


const router = express.Router();

router.get('/tours', market.getTours);
router.post('/tours', market.addNewTour);
router.post('/tours/img', market.saveTourImg);

router.patch('/profile', user.setUserChange);
router.post('/profile/img', user.saveUserImg);
router.patch('/profile/fav-tours', user.updateFavList);


export default router;
