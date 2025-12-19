// types.ts

import { Request, Response } from 'express';
import { User } from '@prisma/client';

// =============== ТИПЫ ДЛЯ REQUEST ===============

type TypeRequestLoginBody = {
  email: string;
  password: string;
};

export type TypeRequestLogin = Request<{}, {}, TypeRequestLoginBody>;

type TypeRequestRegisterBody = {
  name: string;
  email: string;
  password: string;
};

export type TypeRequestRegister = Request<{}, {}, TypeRequestRegisterBody>;

// =============== ТИПЫ ДЛЯ RESPONSE ===============

export type TypeResponceSuccessfulLogin = {
  name: string;
  email: string;
  userId: string;
  token: string;
};

type TypeResponceLoginError = {
  error: string;
};

export type TypeResponceLogin = Response<
  TypeResponceSuccessfulLogin | TypeResponceLoginError
>;

export type TypeResponceSuccessfulRegister = {
  name: string;
  email: string;
  userId: string;
  token: string;
};

type TypeResponceRegisterError = {
  error: string;
};

export type TypeResponceRegister = Response<
  TypeResponceSuccessfulRegister | TypeResponceRegisterError
>;

// =============== ТИПЫ ДЛЯ /current ===============

export type TypeResponseUser = {
  userId: string;
  email: string;
  name: string | null;
};

export type TypeResponceCurrent = Response<
  TypeResponseUser | { error: string }
>;

export type TypeRequestAuth = Request & {
  user: User;
};
