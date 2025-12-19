// middleware/types.ts

import { Request, Response } from 'express';
import { User } from '@prisma/client';

// =============== ТИП REQUEST ПОСЛЕ АВТОРИЗАЦИИ ===============
export type TypeRequestAuth = Request & {
  user: User;
};

// =============== ТИП RESPONSE ДЛЯ MIDDLEWARE (auth) ===============
// (но на самом деле в auth можно использовать обычный Response)
type TypeResponceSuccessfulAuth = {
  name: string;
};

type TypeResponceErrorAuth = {
  error: string;
};

export type TypeResponceAuth = Response<
  TypeResponceSuccessfulAuth | TypeResponceErrorAuth
>;
