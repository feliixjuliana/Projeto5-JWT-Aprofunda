"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(props) {
        this.id = props.id || (0, uuid_1.v4)();
        this.username = props.username;
        this.password = props.password;
        this.createdAt = props.createdAt || new Date();
    }
}
exports.User = User;
