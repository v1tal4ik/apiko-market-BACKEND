import express from 'express';
import userControllers from '../controllers/user';


const router = express.Router();

router.get('/login/email', userControllers.getUserByEmail);
router.get('/login/password', userControllers.isPassValid);
router.get('/singIn', userControllers.singInById);

// router.get('/secret', userControllers.refreshTokens); // patch

router.get('/registration/email', userControllers.isEmailUnique);
router.post('/registration/user', userControllers.addNewUser);


export default router;
