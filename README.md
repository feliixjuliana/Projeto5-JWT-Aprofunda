# 🚀 Biblioteca em TypeScript

**Sistema de gerenciamento de livros para uma biblioteca,** com foco em uma arquitetura limpa e segura, incluindo funcionalidades de autenticação e autorização para acesso a recursos. Assim como o deploy do render.

## Funcionalidades

A API oferece os seguintes endpoints para interação com a biblioteca:

Caso deseje acessar as api pelo deploy, use: https://projeto5-jwt-aprofunda.onrender.com

### Autenticação e Usuários (Administradores)

* **`POST /api/register`**
* **`POST /api/login`**
* **`GET /api/users`**: **Esta rota requer autenticação.**
* **`GET /api/users/:id`**: **Esta rota requer autenticação.**

### Gerenciamento de Livros (Requere Autenticação para Escrita)

* **`GET /api/books`**
* **`GET /api/books/:id`**
* **`POST /api/books`**: **Esta rota requer autenticação.**
* **`PATCH /api/book/:id`**: **Esta rota requer autenticação.**
* **`DELETE /api/book/:id`**: **Esta rota requer autenticação.**

## 🛠️ Conteúdo e Tecnologias

O projeto foi estruturado com base nos seguintes conceitos e ferramentas, visando escalabilidade, manutenibilidade e segurança:

* **MongoDB**
* **Clean Architecture**
* **TypeScript**
* **Express.js**
* **JWT (JSON Web Tokens)**
* **Bcrypt**
* **Uuid**
* **Cors**
* **Testes com Thunder Client/Postman**

---

## Acessando:

Siga estas instruções para ter uma cópia do projeto funcionando na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

* **Node.js** (versão LTS recomendada)
* **npm** ou **Yarn** (gerenciador de pacotes)
* **TypeScript** (geralmente instalado junto com o Node.js ou via npm)
* **MongoDB Instance**: Uma instância do MongoDB (local ou na nuvem, como MongoDB Atlas) configurada e acessível. Você precisará de uma URI de conexão.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/feliixjuliana/Projeto5-Clean-JWT-Aprofunda.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Projeto2-Clean-Architecture-Aprofunda
    ```
3.  **Navegue até o projeto da API:**
    ```bash
    cd api-clean-architecture
    ```
4.  **Instale as dependências:**
    ```bash
    npm install
    ```
5.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do diretório `api-clean-architecture` e adicione a URI de conexão do seu MongoDB e uma chave secreta para o JWT:

    ```
    MONGO_URL=
    MONGO_URI_TEST=
    PORT=
    JWT_SECRET=
    ```

6.  **Execute o projeto:**
    ```bash
    npm run start
    ```
    O servidor deverá iniciar, geralmente em `http://localhost:3000`.

---

## 📸 Demonstração

### Registro de Usuário (Administrador)

* **Endpoint:**
* Render: `POST https://projeto5-jwt-aprofunda.onrender.com/register`
* Local:`POST http://localhost:3000/register`
* **Headers:**
    * `Content-Type: application/json`
* **Body (JSON):**
    ```json
    {
        "username": "admin_user",
        "password": "senha_segura_123"
    }
    ```

### Login de Usuário (Administrador) e Obtenção do Token JWT

* **Endpoint:**
* Render: `POST https://projeto5-jwt-aprofunda.onrender.com/login`
* Local:`POST http://localhost:3000/login`
* **Headers:**
    * `Content-Type: application/json`
* **Body (JSON):**
    ```json
    {
        "username": "admin_user",
        "password": "senha_segura_123"
    }
    ```
* **Resposta esperada (incluindo o token):**
    ```json
    {
        "message": "User admin_user logged in successfully!",
        "userId": "algum-id-do-usuario",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhbGgum-id-do-usuario... (Seu Token JWT completo aqui)"
    }
    ```
    *Use o `token` retornado nas requisições para rotas protegidas, como na imagem abaixo.*

### Enviando para o banco (Exemplo de Criação de Livro)

* **Endpoint:**
* Render: `POST https://projeto5-jwt-aprofunda.onrender.com/books`
* Local:`POST http://localhost:3000/books`
* **Headers:**
    * `Content-Type: application/json`
    * `Authorization: Bearer SEU_TOKEN_JWT_AQUI` (Obtenha este token após fazer login em `/api/login`)
* **Body (JSON):**
    ```json
    {
        "title": "O Senhor dos Anéis",
        "bookGenres": "Fantasia",
        "status": "Disponível",
        "exemplaryQuantity": 5,
        "author": "J.R.R. Tolkien"
    }
    ```
  
  *<img width="500" height="500" alt="Captura de tela 2025-07-28 163915" src="https://github.com/user-attachments/assets/b1bdcbe5-055e-4f9b-a057-20c5d1039398" />
