import request from "supertest";
import app from "../../index";
import mongoose from "mongoose";
import { userModel } from "../../database/mongooseUserModel";
import { bookModel } from "../../database/mongooseBookModel";

describe("POST /books - Criação de Livro com Autenticação", () => {
    let token: string;
    const registerTest = {
        username: 'Admin',
        passwordText: 'admin123'
    };

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI_TEST!);
        await request(app).post('/register').send(registerTest);

        const loginTest = await request(app).post('/login').send({
            username: registerTest.username,
            passwordText: registerTest.passwordText
        });
        console.log('Resposta do login:', loginTest.status, loginTest.body);

        if (loginTest.body && loginTest.body.token) {
            token = loginTest.body.token;
        } else {
            console.error('ERRO: Propriedade token não encontrada no corpo da resposta de login.');
        }
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("deve criar um novo livro com sucesso com autenticação", async () => {
        expect(token).toBeDefined();

        const bookData = {
            title: 'Capitães da Areia',
            bookGenres: 'Aventura',
            status: 'Disponível',
            exemplaryQuantity: 3,
            author: 'Jorge Amado'
        };

        const response = await request(app)
            .post("/books")
            .set('Authorization', `Bearer ${token}`)
            .send(bookData);

        expect(response.status).toBe(201);
        expect(response.body.title).toBe(bookData.title);
    });

    it("não deve criar um novo livro sem autenticação (token)", async () => {
        const bookData = {
            title: 'Capitães da Areia',
            bookGenres: 'Aventura',
            status: 'Disponível',
            exemplaryQuantity: 3,
            author: 'Jorge Amado'
        };

        const response = await request(app)
            .post("/books")
            .send(bookData);

        expect(response.status).toBe(401);
    });
});