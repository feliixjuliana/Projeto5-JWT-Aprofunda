"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
const mongooseUserModel_1 = require("./mongooseUserModel");
const user_model_1 = require("../models/user-model");
class MongoUserRepository {
    toEntity(doc) {
        if (!doc)
            return null;
        return new user_model_1.User({
            id: doc._id.toString(),
            username: doc.username,
            password: doc.password,
            createdAt: doc.createdAt,
        });
    }
    toMongooseDoc(user) {
        return {
            username: user.username,
            password: user.password,
            createdAt: user.createdAt,
        };
    }
    async save(user) {
        const doc = await mongooseUserModel_1.userModel.create({
            _id: user.id,
            ...this.toMongooseDoc(user)
        });
        return this.toEntity(doc);
    }
    async findByUsername(username) {
        const doc = await mongooseUserModel_1.userModel.findOne({ username });
        return doc ? this.toEntity(doc) : null;
    }
    async findById(id) {
        const doc = await mongooseUserModel_1.userModel.findById(id);
        return doc ? this.toEntity(doc) : null;
    }
    async getAll() {
        const docs = await mongooseUserModel_1.userModel.find({});
        return docs.map(doc => this.toEntity(doc));
    }
}
exports.MongoUserRepository = MongoUserRepository;
