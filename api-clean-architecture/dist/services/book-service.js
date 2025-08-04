"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_factory_1 = __importDefault(require("../factories/book-factory"));
class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async createBook(data) {
        const newBook = book_factory_1.default.create(data);
        const savedBook = await this.bookRepository.save(newBook);
        return savedBook;
    }
    async getAllBooks() {
        return await this.bookRepository.getAll();
    }
    async getBookById(id) {
        return await this.bookRepository.findById(id);
    }
    async updateBook(id, data) {
        const bookToUpdate = await this.bookRepository.findById(id);
        if (!bookToUpdate) {
            return null;
        }
        if (data.title !== undefined)
            bookToUpdate.title = data.title;
        if (data.bookGenres !== undefined)
            bookToUpdate.bookGenres = data.bookGenres;
        if (data.status !== undefined)
            bookToUpdate.status = data.status;
        if (data.exemplaryQuantity !== undefined)
            bookToUpdate.exemplaryQuantity = data.exemplaryQuantity;
        if (data.author !== undefined)
            bookToUpdate.author = data.author;
        const updatedBook = await this.bookRepository.update(bookToUpdate);
        return updatedBook;
    }
    async deleteBookById(id) {
        await this.bookRepository.delete(id);
    }
}
exports.BookService = BookService;
exports.default = BookService;
