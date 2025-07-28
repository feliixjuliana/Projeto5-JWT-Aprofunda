import { userModel, UserDocs } from './mongooseUserModel';
import { User } from '../models/user-model';
import { UserRepository } from '../repositories/UserRepository';

export class MongoUserRepository implements UserRepository {
    private toEntity(doc: UserDocs): User {
        if (!doc) return null as any; 
        return new User({
            id: doc._id.toString(),
            username: doc.username,
            password: doc.password,
            createdAt: doc.createdAt,
        });
    }

    private toMongooseDoc(user: User): Partial<UserDocs> {
        return {
            username: user.username,
            password: user.password,
            createdAt: user.createdAt,
        };
    }

    async save(user: User): Promise<User> {
        const doc = await userModel.create({
            _id: user.id,
            ...this.toMongooseDoc(user)
        }) as UserDocs;
        return this.toEntity(doc);
    }

    async findByUsername(username: string): Promise<User | null> {
        const doc = await userModel.findOne({ username });
        return doc ? this.toEntity(doc) : null;
    }

    async findById(id: string): Promise<User | null> {
        const doc = await userModel.findById(id);
        return doc ? this.toEntity(doc) : null;
    }

    async getAll(): Promise<User[]> {
        const docs = await userModel.find({});
        return docs.map(doc => this.toEntity(doc));
    }

}