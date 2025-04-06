import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get('/users', userController.listUsers);
router.post('/users', userController.createUser);

export default router;