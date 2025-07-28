import { Book } from '../models/book-model';

export interface BookRepository {
    save(book: Book): Promise<Book>;
    findByTitle(title: string): Promise<Book | null>;
    findById(id: string): Promise<Book | null>;
    getAll(): Promise<Book[]>;
    update(book: Book): Promise<Book | null>;
    delete(id: string): Promise<void>;
}