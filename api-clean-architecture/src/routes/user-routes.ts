import express from 'express';
import { MongoUserRepository } from '../database/MongoUserRepository';
import { createUserControllerHandlers } from '../controllers/user-controller';
import { UserService } from '../services/user-service';
import { autenticar } from '../shared/middlewares/authMiddlewares';


var router = express.Router();

const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);
const userController = createUserControllerHandlers(userService);

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/admin', userController.listUsers);
router.get('/admin/:id', autenticar, userController.getUserById);

export default router;