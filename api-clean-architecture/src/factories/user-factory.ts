import { v4 as uuidv4} from 'uuid';
import {User } from '../models/user-model';

interface UserData {
    username: string;
    password: string;
}

export default {
    create: (data: UserData): User => {
        return new User ({
            id: uuidv4(),
            username: data.username,
            password: data.password,
            createdAt: new Date()
        })
    }
}