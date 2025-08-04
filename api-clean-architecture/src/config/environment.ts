export const config = {
    port: process.env.PORT || 3000,
    mongo_url: process.env.MONGO_URL || 'mongogdb://localhost:27017/biblioteca',
    jwt_secret: process.env.JWT_SECRET || 'my-secret',
    node_env: process.env.NODE_ENV || 'development'

}