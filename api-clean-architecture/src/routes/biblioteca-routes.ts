import express from 'express';
import { connectToMongo } from '../database/mongoConnect'
import { MongoBookRepository } from '../database/MongoBookRepository';
import { createBookControllerHandlers } from '../controllers/biblioteca-controller';
import { BookService} from '../services/book-service';
import { autenticar } from '../shared/middlewares/authMiddlewares';

var router = express.Router();

const bookRepository = new MongoBookRepository();
const bookService = new BookService(bookRepository);
const bookController = createBookControllerHandlers(bookService);

router.post('/books', autenticar, bookController.createPost);
router.get('/books', bookController.listPosts);
router.get('/books/:id', bookController.getBookById);
router.patch('/book/:id', autenticar, bookController.updatePost);
router.delete('/book/:id', autenticar, bookController.deletePost);

export default router; 