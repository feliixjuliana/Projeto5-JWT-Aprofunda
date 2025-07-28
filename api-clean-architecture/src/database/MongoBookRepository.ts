import { bookModel, BookDocs } from './mongooseBookModel';
import { Book } from '../models/book-model';
import { BookRepository } from '../repositories/BookRepository';

export class MongoBookRepository implements BookRepository {
    private toEntity(doc: BookDocs): Book {
        if (!doc) return null as any;
        return new Book({
            id: doc._id.toString(),
            title: doc.title,
            bookGenres: doc.bookGenres,
            status: doc.status,
            exemplaryQuantity: doc.exemplaryQuantity,
            author: doc.author,
            created_At: doc.created_At,
        })
    }

    private toMongooseDoc(book: Book): Partial<BookDocs> {
        return {
            title: book.title,
            bookGenres: book.bookGenres,
            status: book.status,
            exemplaryQuantity: book.exemplaryQuantity,
            author: book.author,
            created_At: book.created_At,
        };
    }

    async save(book: Book): Promise<Book> {
        const doc = await bookModel.create({
            _id: book.id,
            ...this.toMongooseDoc(book)
        }) as BookDocs;
        return this.toEntity(doc)
    }

    async findByTitle(title: string): Promise<Book | null> {
        const doc = await bookModel.findOne({ title });
        return doc ? this.toEntity(doc) : null;
    }

    async findById(id: string): Promise<Book | null> {
        const doc = await bookModel.findById(id);
        return doc ? this.toEntity(doc) : null;
    }

    async getAll(): Promise<Book[]> {
        const docs = await bookModel.find({});
        return docs.map(doc => this.toEntity(doc));
    }

    async update(book: Book): Promise<Book | null> {
        const doc = await bookModel.findByIdAndUpdate(
            book.id,
            this.toMongooseDoc(book),
            { new: true }
        ) as BookDocs;
        return doc ? this.toEntity(doc) : null;
    }

    async delete(id: string): Promise<void> {
        await bookModel.findByIdAndDelete(id);
    }
}