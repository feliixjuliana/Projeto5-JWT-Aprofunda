import request from "supertest";
import app from "../../index";

describe('DELETE /book/:id', () => {
    let bookId: string;

    beforeAll(async () => {
        const { body } = await request(app).post('/books').send({
            title: 'Capitãe da Areia',
            bookGenres: 'Aventura',
            status: 'Disponível',
            exemplaryQuantity: 3,
            author: 'Jorge Amado'
        });
        bookId = body.id;
    });
    it('Deve apagar o item informado', async () => {
        const response = await request(app).delete(`/book/${bookId}`)

        expect(response.status).toBe(204);

    });

})