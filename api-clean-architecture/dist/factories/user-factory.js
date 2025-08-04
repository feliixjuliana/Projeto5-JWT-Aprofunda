"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const user_model_1 = require("../models/user-model");
exports.default = {
    create: (data) => {
        return new user_model_1.User({
            id: (0, uuid_1.v4)(),
            username: data.username,
            password: data.password,
            createdAt: new Date()
        });
    }
};
