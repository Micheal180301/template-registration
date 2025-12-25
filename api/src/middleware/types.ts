import { Request, Response } from 'express';
import { User } from '@prisma/client';

export type TypeRequestAuth = Request & {
  user: User;
};

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
