"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_service_1 = require("../../services/book-service");
const book_storage_1 = __importDefault(require("../../storage/book-storage"));
describe('PATCH bibliotecaService', () => {
    let bookService;
    beforeEach(() => {
        book_storage_1.default.books = [];
        bookService = new book_service_1.BookService(book_storage_1.default);
    });
    it('Atualizando livro', async () => {
        const updateBookTest = await bookService.createBook({
            title: 'Capitãe da Areia',
            bookGenres: 'Aventura',
            status: 'Disponível',
            exemplaryQuantity: 3,
            author: 'Jorge Amado'
        });
        expect(updateBookTest.id).toBeTruthy();
        const update = await bookService.updateBook(updateBookTest.id, { title: 'Capitães da Areia' });
        expect(update?.title).toBe('Capitães da Areia');
    });
});
//# sourceMappingURL=updateBook.spec.js.map