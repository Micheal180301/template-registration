import express from 'express';

const routerUsers = express.Router();

routerUsers.post('/login', (req, res) => res.json('login'));

routerUsers.post('/register', (req, res) => res.json('register'));

routerUsers.get('/current', (req, res) => res.json('current'));

export default routerUsers;
