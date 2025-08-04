"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserControllerHandlers = void 0;
const jwt_1 = require("../shared/helpews/jwt");
const createUserControllerHandlers = (userServiceInstance) => {
    const registerUser = async (req, res) => {
        const { username, passwordText } = req.body;
        try {
            const newUser = await userServiceInstance.registerUser({ username, passwordText });
            res.status(201).json({ message: `User ${newUser.username} registered successfully!`, id: newUser.id });
        }
        catch (error) {
            if (error.message === 'Username already exists') {
                res.status(409).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: 'Error registering user', error: error.message });
            }
        }
    };
    const loginUser = async (req, res) => {
        const { username, passwordText } = req.body;
        try {
            const user = await userServiceInstance.validateLogin(username, passwordText);
            if (!user) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            const token = (0, jwt_1.gerarToken)({ userId: user.id, username: user.username });
            res.status(200).json({ message: `User ${user.username} logged in successfully! Seu Token: `, userId: user.id, token: token });
        }
        catch (error) {
            res.status(500).json({ message: 'Error during login', error: error.message });
        }
    };
    const listUsers = async (req, res) => {
        const users = await userServiceInstance.getAllUsers();
        res.json(users);
    };
    const getUserById = async (req, res) => {
        const { id } = req.params;
        const user = await userServiceInstance.getUserById(id);
        if (!user) {
            res.status(404).json({ message: `User with id:${id} not found.` });
            return;
        }
        res.status(200).json(user);
    };
    return {
        registerUser,
        loginUser,
        listUsers,
        getUserById,
    };
};
exports.createUserControllerHandlers = createUserControllerHandlers;
//# sourceMappingURL=user-controller.js.map