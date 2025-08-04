"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoConnect_1 = require("./database/mongoConnect");
const biblioteca_routes_1 = __importDefault(require("./routes/biblioteca-routes"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(biblioteca_routes_1.default);
app.use(user_routes_1.default);
if (process.env.NODE_ENV !== 'test') {
    const URI = process.env.MONGO_URI;
    if (!URI) {
        throw new Error(' a variavel não está definida');
    }
    (0, mongoConnect_1.connectToMongo)(URI);
}
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
exports.default = app;
