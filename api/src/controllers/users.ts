import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client';

import type {
  TypeRequestLogin,
  TypeResponceLogin,
  TypeResponceSuccessfulLogin,
  TypeRequestRegister,
  TypeResponceRegister,
  TypeRequestAuth,
} from './types';

// ← только TypeRequestAuth
import { TypeResponceCurrent } from './types';

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

/**
 * @route POST /api/user/register
 * @desc регистрация
 * @access Public
 */

export const register = async (
  req: TypeRequestRegister,
  res: TypeResponceRegister
) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: 'Запоните обязательные поля' });

    const isUser = await prisma.user.findFirst({ where: { email: email } });

    if (isUser)
      return res
        .status(409) // статус для уже существующих ресурсов
        .json({ error: 'Пользователь с таким email уже существует' });

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        passwordHash: hashedPassword,
      },
    }); // возвращает обект уже с userId

    const secret = process.env.JWT_SECRET;

    if (!secret) return res.status(500).json({ error: 'Ошибка сервера' });

    return res.status(201).json({
      userId: user.id,
      email: user.email,
      name: user.name!,
      token: jwt.sign({ userId: user.id }, secret, { expiresIn: '30d' }),
    });
  } catch (error) {
    console.log('Ошибка в register: ', error);
    return res.status(500).json({ error: 'Неизвестная ошибка на сервере' });
  }
};

/**
 * @route GET /api/user/current
 * @desc текущщий юзер
 * @access Private
 */

// users.ts

// import { TypeRequestAuth, TypeResponseCurrent } from './types';

// controllers/users.ts

// ↑ обращаемся к TypeRequestAuth из middleware/types.ts

export const current = async (
  req: TypeRequestAuth, // ← после auth req точно имеет user
  res: TypeResponceCurrent // ← из middleware/types.ts, но должен совпадать с types.ts
) => {
  try {
    const resUser = {
      name: req.user.name,
      email: req.user.email,
      userId: req.user.id,
    };

    return res.status(200).json(resUser);
  } catch (error) {
    console.error('Ошибка в current:', error);
    return res.status(500).json({ error: 'Ошибка сервера' });
  }
};
