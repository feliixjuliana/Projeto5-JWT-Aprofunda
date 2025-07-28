import { User } from '../models/user-model'

export interface UserRepository {
    save( user: User): Promise<User>;
    findByUsername(username: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    getAll(): Promise<User[]>;
}