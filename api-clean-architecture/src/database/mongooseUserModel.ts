import mongoosee, {Schema, Document} from 'mongoose';
import { UserProps } from '../models/user-model';

export interface UserDocs extends UserProps {
    _id: string;
    createdAt: Date;
}

const userSchema = new Schema<UserDocs>({
    _id: { type: String, required: true},
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
}, {
    versionKey: false
})

export const userModel = mongoosee.model<UserDocs>('User', userSchema)