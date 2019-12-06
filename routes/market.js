import express from 'express';
import market from '../controllers/market';


const router = express.Router();

router.get('/itemList', market.getItemList);


export default router;
