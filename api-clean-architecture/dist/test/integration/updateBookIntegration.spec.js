"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const mongoose_1 = __importDefault(require("mongoose"));
describe('PATCH /book/:id', () => {
    let token;
    let bookId;
    const registerTest = {
        username: 'Admin',
        passwordText: 'admin123'
    };
    beforeAll(async () => {
        await mongoose_1.default.connect(process.env.MONGO_URI_TEST);
        await (0, supertest_1.default)(index_1.default).post('/register').send(registerTest);
        const loginTest = await (0, supertest_1.default)(index_1.default).post('/login').send({
            username: registerTest.username,
            passwordText: registerTest.passwordText
        });
        console.log('Resposta do login:', loginTest.status, loginTest.body);
        if (loginTest.body && loginTest.body.token) {
            token = loginTest.body.token;
        }
        else {
            console.error('ERRO: Propriedade token não encontrada no corpo da resposta de login.');
        }
    });
    afterAll(async () => {
        await mongoose_1.default.connection.close();
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
        const response = await (0, supertest_1.default)(index_1.default)
            .post("/books")
            .set('Authorization', `Bearer ${token}`)
            .send(bookData);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe(bookData.title);
        bookId = response.body.id;
    });
    it("não deve criar um novo livro sem autenticação (token)", async () => {
        const bookData = {
            title: 'Capitães da Areia',
            bookGenres: 'Aventura',
            status: 'Disponível',
            exemplaryQuantity: 3,
            author: 'Jorge Amado'
        };
        const response = await (0, supertest_1.default)(index_1.default)
            .post("/books")
            .send(bookData);
        expect(response.status).toBe(401);
    });
    it('Deve alterar o valor informado com sucesso', async () => {
        const updateBook = {
            title: 'Capitães da Areia 2'
        };
        const response = await (0, supertest_1.default)(index_1.default)
            .patch(`/book/${bookId}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updateBook);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe(updateBook.title);
    });
});
