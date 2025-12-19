import express from 'express';
import { login, register, current } from '../controllers/users';
import { auth } from '../middleware/auth';

const routerUsers = express.Router();

routerUsers.post('/login', login);

routerUsers.post('/register', register);

routerUsers.get('/current', auth, (req, res) => current(req as any, res));

export default routerUsers;
