import {BookService} from '../../services/book-service';
import BookStorage from '../../storage/book-storage';

describe('POST bibliotecaServices', () => {
    let bookService: BookService;

    beforeEach(() => {
        BookStorage.books = []
        bookService = new BookService(BookStorage)
    });

    it('Criar livros', async () => {
       const book = await bookService.createBook({
             title: 'Capitães da Areia',
             bookGenres: 'Aventura',
             status: 'Disponível',
             exemplaryQuantity: 3,
             author: 'Jorge Amado'
        });

        expect(BookStorage.books).toHaveLength(1);
        expect(book.id).toBeTruthy();
        expect(book.author).toBe('Jorge Amado');
    })
})