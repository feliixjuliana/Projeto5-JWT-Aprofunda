import { Book } from "../models/book-model"; 

class BookStorage {
    private static instance: BookStorage;

    public books: Book[] = [];

    private constructor() { }

    public static getInstance(): BookStorage {
        if (!BookStorage.instance) {
            BookStorage.instance = new BookStorage()
        }
        return BookStorage.instance;
    }

    public async save(book: Book): Promise<Book> {
        this.books.push(book);
        return book; 
    }

    public async getAll(): Promise<Book[]> {
        return this.books;
    }

    public async findById(id: string): Promise<Book | null> {
        const foundBook = this.books.find((book) => book.id === id);
        return foundBook || null;
    }

    public async update(book: Book): Promise<Book | null> {
        const index = this.books.findIndex(b => b.id === book.id);
        if (index > -1) {
            this.books[index] = book;
            return this.books[index];
        }
        return null;
    }
    
    public async delete(id: string): Promise<void> {
        this.books = this.books.filter((book) => book.id !== id);
    }
}

export default BookStorage.getInstance();