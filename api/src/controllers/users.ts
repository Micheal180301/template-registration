import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client';

import type {
  TypeRequestLogin,
  TypeResponceLogin,
  TypeResponceSuccessfulLogin,
} from './types';

const prisma = new PrismaClient();

/**
 * @route POST /api/user/login
 * @desc логин
 * @access Public
 */

export const login = async (req: TypeRequestLogin, res: TypeResponceLogin) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ error: 'Неверный email или пароль' }); // 400 ошибка в обекте Request(тоесть ошибка на строне клиента)
    }

    const user = await prisma.user.findFirst({ where: { email: email } }); // ищщем в базе объект у котрого совпадает email

    if (!user)
      return res.status(401).json({ error: 'Не верный email или пароль' }); // ошибка на клиенте(клиент вводит лажу)

    const isCorrectedPassword = await bcrypt.compare(
      password,
      user.passwordHash
    ); // сравниваем пароли

    if (!isCorrectedPassword)
      return res.status(400).json({ error: 'Неверный пароль' });

    const secret = process.env.JWT_SECRET;

    if (!secret) return res.status(500).json({ error: 'Ошибка сервера' });

    const userData: TypeResponceSuccessfulLogin = {
      userId: user.id, // не смотря на то что в модели у нас userId настроено так что это поле сдесь просто id
      name: user.name!,
      email: user.email,
      token: jwt.sign({ userId: user.id }, secret, { expiresIn: '30d' }), // создаем токен
    };
    return res.status(200).json(userData);
  } catch (error) {
    console.log('Ошибка в Login:', error);
    return res.status(500).json({ error: 'Неизвестная ошибка на сервере' });
  }
};
