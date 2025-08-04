"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookControllerHandlers = void 0;
const createBookControllerHandlers = (bookServiceInstance) => {
    const createPost = async (req, res) => {
        const { title, bookGenres, status, exemplaryQuantity, author } = req.body;
        const newBook = await bookServiceInstance.createBook({ title, bookGenres, status, exemplaryQuantity, author });
        res.status(201).json(newBook);
    };
    const listPosts = async (req, res) => {
        const books = await bookServiceInstance.getAllBooks();
        res.json(books);
    };
    const updatePost = async (req, res) => {
        const { id } = req.params;
        const updatedBook = await bookServiceInstance.updateBook(id, req.body);
        if (!updatedBook) {
            res.status(404).json({ message: `Book com ${id} não encontrado. ` });
            return;
        }
        res.status(200).json(updatedBook);
    };
    const deletePost = async (req, res) => {
        const { id } = req.params;
        await bookServiceInstance.deleteBookById(id);
        res.status(204).json({ message: `Texto com id:${id} excluído com sucesso` });
    };
    const getBookById = async (req, res) => {
        const { id } = req.params;
        const book = await bookServiceInstance.getBookById(id);
        if (!book) {
            res.status(404).json({ message: `Livro com id:${id} não encontrado.` });
            return;
        }
        res.status(200).json(book);
    };
    return {
        createPost,
        listPosts,
        updatePost,
        deletePost,
        getBookById,
    };
};
exports.createBookControllerHandlers = createBookControllerHandlers;
//# sourceMappingURL=biblioteca-controller.js.map