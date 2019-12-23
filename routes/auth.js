import express from 'express';
import user from '../controllers/user';


const router = express.Router();

router.get('/login/email', user.getUserByEmail);
router.get('/login/password', user.isPassValid);
router.get('/singIn', user.singInById);

router.get('/registration/email', user.isEmailUnique);
router.post('/registration/user', user.addNewUser);


export default router;
