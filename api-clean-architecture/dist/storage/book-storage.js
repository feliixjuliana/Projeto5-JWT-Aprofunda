"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookStorage {
    constructor() {
        this.books = [];
    }
    static getInstance() {
        if (!BookStorage.instance) {
            BookStorage.instance = new BookStorage();
        }
        return BookStorage.instance;
    }
    async save(book) {
        this.books.push(book);
        return book;
    }
    async getAll() {
        return this.books;
    }
    async findById(id) {
        const foundBook = this.books.find((book) => book.id === id);
        return foundBook || null;
    }
    async update(book) {
        const index = this.books.findIndex(b => b.id === book.id);
        if (index > -1) {
            this.books[index] = book;
            return this.books[index];
        }
        return null;
    }
    async delete(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
}
exports.default = BookStorage.getInstance();
