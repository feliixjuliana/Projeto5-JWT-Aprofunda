"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MongoUserRepository_1 = require("../database/MongoUserRepository");
const user_controller_1 = require("../controllers/user-controller");
const user_service_1 = require("../services/user-service");
const authMiddlewares_1 = require("../shared/middlewares/authMiddlewares");
var router = express_1.default.Router();
const userRepository = new MongoUserRepository_1.MongoUserRepository();
const userService = new user_service_1.UserService(userRepository);
const userController = (0, user_controller_1.createUserControllerHandlers)(userService);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/admin', userController.listUsers);
router.get('/admin/:id', authMiddlewares_1.autenticar, userController.getUserById);
exports.default = router;
