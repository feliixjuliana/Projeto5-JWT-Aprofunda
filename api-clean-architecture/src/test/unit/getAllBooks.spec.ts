import bibliotecaServices from '../../services/book-service';
import BookStorage from '../../storage/book-storage';

describe('Get bibliotecaService', () => {
    beforeEach(() => {
        BookStorage.books = []
    });

    it('Listar todos os livros', () => {
        bibliotecaServices.createBook({
             title: 'Capitães da Areia',
             bookGenres: 'Aventura',
             status: 'Disponível',
             exemplaryQuantity: 3,
             author: 'Jorge Amado'
        });

        expect(BookStorage.books.length).toBe(1);

        const listBookCreated = bibliotecaServices.getAllBooks();

        expect(listBookCreated[0].title).toBe('Capitães da Areia');
    })
})
