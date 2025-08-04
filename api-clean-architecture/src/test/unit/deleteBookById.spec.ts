import { BookService } from '../../services/book-service';
import BookStorage from '../../storage/book-storage';

describe('DELETE bibliotecaServices', () => {
    let bookService: BookService;

    beforeEach(() => {
        BookStorage.books = []
        bookService = new BookService(BookStorage);
    });

    it('Deletar livro', async () => {
        const bookDelete = await bookService.createBook({
            title: 'Capitães da Areia',
            bookGenres: 'Aventura',
            status: 'Disponível',
            exemplaryQuantity: 3,
            author: 'Jorge Amado'
        });

        expect(bookDelete.id).toBeTruthy();

        bookService.deleteBookById(bookDelete.id);

        expect(BookStorage.books.length).toBe(0);
    })
})