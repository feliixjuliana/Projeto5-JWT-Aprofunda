"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const book_model_1 = require("../models/book-model");
exports.default = {
    create: (data) => {
        return new book_model_1.Book({
            id: (0, uuid_1.v4)(),
            title: data.title,
            bookGenres: data.bookGenres,
            status: data.status,
            exemplaryQuantity: data.exemplaryQuantity,
            author: data.author,
            created_At: new Date(),
        });
    },
};
//# sourceMappingURL=book-factory.js.map