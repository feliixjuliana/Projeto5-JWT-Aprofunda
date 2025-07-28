import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/book-model';

interface BookData {
    title: string;
    bookGenres: string;
    status: string;
    exemplaryQuantity: number;
    author: string;
}

export default {
    create: (data: BookData): Book => {
        return new Book({
            id: uuidv4(),
            title: data.title,
            bookGenres: data.bookGenres,
            status: data.status,
            exemplaryQuantity: data.exemplaryQuantity,
            author: data.author,
            created_At: new Date(),
        });
    },
};