"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoBookRepository = void 0;
const mongooseBookModel_1 = require("./mongooseBookModel");
const book_model_1 = require("../models/book-model");
class MongoBookRepository {
    toEntity(doc) {
        if (!doc)
            return null;
        return new book_model_1.Book({
            id: doc._id.toString(),
            title: doc.title,
            bookGenres: doc.bookGenres,
            status: doc.status,
            exemplaryQuantity: doc.exemplaryQuantity,
            author: doc.author,
            created_At: doc.created_At,
        });
    }
    toMongooseDoc(book) {
        return {
            title: book.title,
            bookGenres: book.bookGenres,
            status: book.status,
            exemplaryQuantity: book.exemplaryQuantity,
            author: book.author,
            created_At: book.created_At,
        };
    }
    async save(book) {
        const doc = await mongooseBookModel_1.bookModel.create({
            _id: book.id,
            ...this.toMongooseDoc(book)
        });
        return this.toEntity(doc);
    }
    async findByTitle(title) {
        const doc = await mongooseBookModel_1.bookModel.findOne({ title });
        return doc ? this.toEntity(doc) : null;
    }
    async findById(id) {
        const doc = await mongooseBookModel_1.bookModel.findById(id);
        return doc ? this.toEntity(doc) : null;
    }
    async getAll() {
        const docs = await mongooseBookModel_1.bookModel.find({});
        return docs.map(doc => this.toEntity(doc));
    }
    async update(book) {
        const doc = await mongooseBookModel_1.bookModel.findByIdAndUpdate(book.id, this.toMongooseDoc(book), { new: true });
        return doc ? this.toEntity(doc) : null;
    }
    async delete(id) {
        await mongooseBookModel_1.bookModel.findByIdAndDelete(id);
    }
}
exports.MongoBookRepository = MongoBookRepository;
