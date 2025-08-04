"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const uuid_1 = require("uuid");
class Book {
    constructor(props) {
        this.id = props.id || (0, uuid_1.v4)();
        this.title = props.title;
        this.bookGenres = props.bookGenres;
        this.status = props.status;
        this.exemplaryQuantity = props.exemplaryQuantity;
        this.author = props.author;
        this.created_At = props.created_At || new Date();
    }
}
exports.Book = Book;
//# sourceMappingURL=book-model.js.map