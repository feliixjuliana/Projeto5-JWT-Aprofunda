"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_service_1 = require("../../services/book-service");
const book_storage_1 = __importDefault(require("../../storage/book-storage"));
describe('POST bibliotecaServices', () => {
    let bookService;
    beforeEach(() => {
        book_storage_1.default.books = [];
        bookService = new book_service_1.BookService(book_storage_1.default);
    });
    it('Criar livros', async () => {
        const book = await bookService.createBook({
            title: 'Capitães da Areia',
            bookGenres: 'Aventura',
            status: 'Disponível',
            exemplaryQuantity: 3,
            author: 'Jorge Amado'
        });
        expect(book_storage_1.default.books).toHaveLength(1);
        expect(book.id).toBeTruthy();
        expect(book.author).toBe('Jorge Amado');
    });
});
