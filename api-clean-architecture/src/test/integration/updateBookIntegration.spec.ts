import request from "supertest";
import app from "../../index";

describe('PATCH /book/:id', () => {
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
    it('Deve alterar o valor informado com sucesso', async () => {
        const response = await request(app).patch(`/book/${bookId}`).send({
            title: 'Capitães da Areia'
        });

        expect(response.status).toBe(200);

    });

    
    it('Não deve alterar o valor informado', async () => {
        const response = await request(app).patch(`/book/123`).send({
            title: 'Capitães da Areia'
        });

        expect(response.status).toBe(404);

    });


})