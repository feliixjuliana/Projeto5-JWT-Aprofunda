"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_factory_1 = __importDefault(require("../factories/user-factory"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async registerUser(data) {
        const existingUser = await this.userRepository.findByUsername(data.username);
        if (existingUser) {
            throw new Error('Username already exists');
        }
        const saltRounds = 10;
        const password = await bcrypt_1.default.hash(data.passwordText, saltRounds);
        const newUser = user_factory_1.default.create({
            username: data.username,
            password: password
        });
        const savedUser = await this.userRepository.save(newUser);
        return savedUser;
    }
    async validateLogin(username, passwordInput) {
        const user = await this.userRepository.findByUsername(username);
        if (!user) {
            return null;
        }
        const isPasswordValid = await bcrypt_1.default.compare(passwordInput, user.password);
        if (!isPasswordValid) {
            return null;
        }
        return user;
    }
    async getUserById(id) {
        return await this.userRepository.findById(id);
    }
    async getAllUsers() {
        return await this.userRepository.getAll();
    }
}
exports.UserService = UserService;
