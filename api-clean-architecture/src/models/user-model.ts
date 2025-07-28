import { v4 as uuidv4 } from 'uuid';

export interface UserProps {
    id?: string;
    username: string;
    password: string; 
    createdAt?: Date;
}

export class User {
    public readonly id: string;
    public username: string;
    public password: string;
    public createdAt: Date;

    constructor(props: UserProps) {
        this.id = props.id || uuidv4();
        this.username = props.username;
        this.password = props.password;
        this.createdAt = props.createdAt || new Date();
    }
}