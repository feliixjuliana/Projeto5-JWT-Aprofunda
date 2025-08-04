import {BookService} from '../../services/book-service';
import BookStorage from '../../storage/book-storage';

describe('PATCH bibliotecaService', () => {
    let bookService: BookService;

    beforeEach(() => {
        BookStorage.books = []
        bookService = new BookService(BookStorage);
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

        const update = await bookService.updateBook(updateBookTest.id, {title: 'Capitães da Areia'});

        expect(update?.title).toBe('Capitães da Areia');
    })
})
