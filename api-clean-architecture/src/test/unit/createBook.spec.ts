import bibliotecaServices from '../../services/book-service';
import BookStorage from '../../storage/book-storage';

describe('POST bibliotecaServices', () => {
    beforeEach(() => {
        BookStorage.books = []
    });

    it('Criar livros', () => {
       const book =  bibliotecaServices.createBook({
             title: 'Capitães da Areia',
             bookGenres: 'Aventura',
             status: 'Disponível',
             exemplaryQuantity: 3,
             author: 'Jorge Amado'
        });

        expect(BookStorage.books).toHaveLength(1);
        expect(book.id).toBeTruthy();
        expect(book.author).toBe('Jorge Amado');
        expect(book).toEqual(expect.objectContaining({
            id: expect.any(String),
            title: 'Capitães da Areia',
             bookGenres: 'Aventura',
             status: 'Disponível',
             exemplaryQuantity: 3,
             author: 'Jorge Amado',
             created_at: expect.any(String)
        }))
    })
})