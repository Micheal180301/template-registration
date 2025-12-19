// src/index.ts
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';

import routerUsers from './routes/users';

dotenv.config();

const PORT: number = parseInt(process.env.PORT || '3000', 10); // 10 это значит десятеричная система
const IP: string = process.env.IP || '0.0.0.0';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/api/user', routerUsers);

app.listen(PORT, IP, () => {
  console.log(`✅ The server is Runing on: http://${IP}:${PORT}`);
});
