import { v4 as uuidv4 } from 'uuid';

export interface BookProps {
    id?: string;
    title: string;
    bookGenres: string;
    status: string;
    exemplaryQuantity: number;
    author: string;
    created_At?: Date;
}

export class Book {
    public readonly id: string;
    public title: string;
    public bookGenres: string;
    public status: string;
    public exemplaryQuantity: number;
    public author: string;
    public created_At: Date;

    constructor(props: BookProps) {
        this.id = props.id || uuidv4();
        this.title = props.title;
        this.bookGenres = props.bookGenres;
        this.status = props.status;
        this.exemplaryQuantity = props.exemplaryQuantity;
        this.author = props.author;
        this.created_At = props.created_At || new Date();
    }
}