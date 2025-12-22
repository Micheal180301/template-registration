// middleware/auth.ts

import prisma from '../db';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { TypeResponceAuth } from './types'; // ← только для res

export const auth = async (
  req: Request, // ← обычный Request (ещё нет req.user!)
  res: TypeResponceAuth, // ← можно оставить, но лучше Response
  next: NextFunction
) => {
  try {
    const token = req.get('Authorization')?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Не авторизован' });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(500).json({ error: 'Неизвестная ошибка на сервере' });
    }

    const decoded = jwt.verify(token, secret) as { userId: string };

    const user = await prisma.user.findUnique({
      where: { userId: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ error: 'Не авторизован' });
    }

    // Добавляем user в req — ТЕПЕРЬ req имеет тип TypeRequestAuth
    (req as any).user = user;

    next();
  } catch (error) {
    console.log('Ошибка в auth: ', error);
    return res.status(401).json({ error: 'Не авторизован' });
  }
};
