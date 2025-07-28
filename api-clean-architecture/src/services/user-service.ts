import userFactory from "../factories/user-factory";
import { User } from "../models/user-model";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt'; 

interface RegisterUserData {
    username: string;
    passwordText: string; 
}

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async registerUser(data: RegisterUserData): Promise<User> {
        const existingUser = await this.userRepository.findByUsername(data.username);
        if (existingUser) {
            throw new Error('Username already exists');
        }

        const saltRounds = 10;
        const password = await bcrypt.hash(data.passwordText, saltRounds);

        const newUser = userFactory.create({
            username: data.username,
            password: password
        });
        const savedUser = await this.userRepository.save(newUser);
        return savedUser;
    }

    async validateLogin(username: string, passwordInput: string): Promise<User | null> {
        const user = await this.userRepository.findByUsername(username);
        if (!user) {
            return null; 
        }

        const isPasswordValid = await bcrypt.compare(passwordInput, user.password);
        if (!isPasswordValid) {
            return null; 
        }

        return user; 
    }

    async getUserById(id: string): Promise<User | null> {
        return await this.userRepository.findById(id);
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.getAll();
    }
}