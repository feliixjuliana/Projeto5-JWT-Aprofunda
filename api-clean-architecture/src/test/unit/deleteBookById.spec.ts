import bibliotecaServices from '../../services/book-service';
import BookStorage from '../../storage/book-storage';

describe('DELETE bibliotecaServices', () => {
    beforeEach(() => {
        BookStorage.books = []
    });

    it('Deletar livro', () => {
        const bookDelete = bibliotecaServices.createBook({
             title: 'Capitães da Areia',
             bookGenres: 'Aventura',
             status: 'Disponível',
             exemplaryQuantity: 3,
             author: 'Jorge Amado'
        });

        expect(bookDelete.id).toBeTruthy();

        bibliotecaServices.deleteBookById(bookDelete.id);

        expect(BookStorage.books.length).toBe(0);
    })
})