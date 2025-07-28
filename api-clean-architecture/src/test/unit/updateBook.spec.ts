import bibliotecaServices from '../../services/book-service';
import BookStorage from '../../storage/book-storage';

describe('PATCH bibliotecaService', () => {
    beforeEach(() => {
        BookStorage.books = []
    });

    it('Atualizando livro', () => {
        const updateBookTest = bibliotecaServices.createBook({
             title: 'Capitãe da Areia',
             bookGenres: 'Aventura',
             status: 'Disponível',
             exemplaryQuantity: 3,
             author: 'Jorge Amado'
        });
        
        expect(updateBookTest.id).toBeTruthy();

        const update = bibliotecaServices.updateBook(updateBookTest.id, {title: 'Capitães da Areia'});

        expect(update?.title).toBe('Capitães da Areia');
    })
})
