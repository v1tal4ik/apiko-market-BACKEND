import express from 'express';


const router = express.Router();


router.get('/test', (req, res, next) => {
  console.log('work test');
});


export default router;
