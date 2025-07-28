import { Request, Response } from 'express';
import { BookService } from '../services/book-service';

export const createBookControllerHandlers = (bookServiceInstance: BookService) => {

    const createPost = async (req: Request, res: Response): Promise<void> => {
        const { title, bookGenres, status, exemplaryQuantity, author } = req.body;
        const newBook = await bookServiceInstance.createBook({ title, bookGenres, status, exemplaryQuantity, author });

        res.status(201).json({ message: `New book, ${newBook.title}, created!!`, id: newBook.id })
    };

    const listPosts = async (req: Request, res: Response): Promise<void> => {
        const books = await bookServiceInstance.getAllBooks();
        res.json(books);
    };

    const updatePost = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const updatedBook = await bookServiceInstance.updateBook(id, req.body);

        if (!updatedBook) {
            res.status(404).json({ message: `Book com ${id} não encontrado` });
            return;
        }

        res.status(200).json({ message: `Book com id:${id} editado com sucesso!!` });
    };

    const deletePost = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await bookServiceInstance.deleteBookById(id);

        res.status(204).json({ message: `Texto com id:${id} excluído com sucesso` })
    };

    const getBookById = async (req: Request, res: Response): Promise<void> => {
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