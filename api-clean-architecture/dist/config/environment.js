"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: process.env.PORT || 10000,
    mongo_url: process.env.MONGO_URL || 'mongogdb://localhost:27017/biblioteca',
    jwt_secret: process.env.JWT_SECRET || 'senha',
    node_env: process.env.NODE_ENV || 'development'
};
//# sourceMappingURL=environment.js.map