import mongoose, { Schema, Document } from "mongoose";
import { BookProps } from "../models/book-model";

export interface BookDocs extends BookProps{
    _id: string;
    created_At: Date;
}

const bookSchema = new Schema<BookDocs>({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    bookGenres: { type: String, required: true },
    status: { type: String, required: true },
    exemplaryQuantity: { type: Number, required: true },
    author: { type: String, required: true },
    created_At: { type: Date, default: Date.now },
}, {
    versionKey: false
});

export const bookModel = mongoose.model<BookDocs>('Book', bookSchema);