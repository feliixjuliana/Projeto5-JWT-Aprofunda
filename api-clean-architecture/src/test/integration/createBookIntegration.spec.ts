import request from "supertest";
import app from "../../index";

describe('POST /books', () => {
    it('Testando o create', async () => {
        const response = await request(app).post('/books').send({
             title: 'Capitães da Areia',
             bookGenres: 'Aventura',
             status: 'Disponível',
             exemplaryQuantity: 3,
             author: 'Jorge Amado'
        });

    expect(response.status).toBe(201)
    })
})