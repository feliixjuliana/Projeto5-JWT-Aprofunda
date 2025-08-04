import {BookService} from '../../services/book-service';
import BookStorage from '../../storage/book-storage';

describe('Get bibliotecaService', () => {
    let bookService: BookService;

    beforeEach(() => {
        BookStorage.books = []
        bookService = new BookService(BookStorage);
    });

    it('Listar todos os livros', async () => {
        await bookService.createBook({
             title: 'Capitães da Areia',
             bookGenres: 'Aventura',
             status: 'Disponível',
             exemplaryQuantity: 3,
             author: 'Jorge Amado'
        });

        expect(BookStorage.books.length).toBe(1);

        const listBookCreated = await bookService.getAllBooks();

        expect(listBookCreated[0].title).toBe('Capitães da Areia');
    })
})
