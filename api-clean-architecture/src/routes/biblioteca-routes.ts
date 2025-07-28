import express from 'express';
import { connectToMongo } from '../database/mongoConnect'
import { MongoBookRepository } from '../database/MongoBookRepository';
import { createBookControllerHandlers } from '../controllers/biblioteca-controller';
import { BookService} from '../services/book-service';

var router = express.Router();

const bookRepository = new MongoBookRepository();
const bookService = new BookService(bookRepository);
const bookController = createBookControllerHandlers(bookService);

router.post('/books', bookController.createPost);
router.get('/books', bookController.listPosts);
router.get('/books/:id', bookController.getBookById);
router.patch('/book/:id', bookController.updatePost);
router.delete('/book/:id', bookController.deletePost);

const URI = process.env.MONGO_URI;

if(!URI){
    throw new Error(' a variavel não está definida')
}

connectToMongo(URI)

export default router; 