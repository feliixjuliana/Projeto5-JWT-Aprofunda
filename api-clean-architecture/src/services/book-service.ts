import bookFactory from "../factories/book-factory";
import { Book } from "../models/book-model";
import { BookRepository } from "../repositories/BookRepository";

interface BookData {
    title: string;
    bookGenres: string;
    status: string;
    exemplaryQuantity: number;
    author: string;
}

export class BookService {
    private bookRepository: BookRepository;

    constructor(bookRepository: BookRepository) {
        this.bookRepository = bookRepository;
    }

    async createBook(data: BookData): Promise<Book> {
        const newBook = bookFactory.create(data);
        const savedBook = await this.bookRepository.save(newBook);
        return savedBook;
    }

    async getAllBooks(): Promise<Book[]> {
        return await this.bookRepository.getAll();
    }

    async getBookById(id: string): Promise<Book | null> {
        return await this.bookRepository.findById(id);
    }

    async updateBook(id: string, data: Partial<BookData>): Promise<Book | null> {
        const bookToUpdate = await this.bookRepository.findById(id);

        if (!bookToUpdate) {
            return null;
        }

        if (data.title !== undefined) bookToUpdate.title = data.title;
        if (data.bookGenres !== undefined) bookToUpdate.bookGenres = data.bookGenres;
        if (data.status !== undefined) bookToUpdate.status = data.status;
        if (data.exemplaryQuantity !== undefined) bookToUpdate.exemplaryQuantity = data.exemplaryQuantity;
        if (data.author !== undefined) bookToUpdate.author = data.author;

        const updatedBook = await this.bookRepository.update(bookToUpdate);
        return updatedBook;
    }

    async deleteBookById(id: string): Promise<void> {
        await this.bookRepository.delete(id);
    }
}