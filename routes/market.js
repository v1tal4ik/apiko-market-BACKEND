import express from 'express';
import market from '../controllers/market';


const router = express.Router();

router.get('/tours', market.getTours);


export default router;
