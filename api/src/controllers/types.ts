import type { Request, Response } from 'express';

type TypeRequestLoginBody = {
  email: string;
  password: string;
};

export type TypeRequestLogin = Request<{}, {}, TypeRequestLoginBody>; // третий обект в типе Request(стандартный тип express) это ReqBody(поэтому туда мы и засовывем наш кастомный тип) доступ req.body, первый P параметры(/:id напрмер) доступ через req.params, второй ResBody(его особо не используют), четвертый ReqQuery(напрмиер ?name=Mike), доступ к нему req.query

export type TypeResponceSuccessfulLogin = {
  name: string;
  email: string;
  userId: string;
  token: string;
};

type TypeResponcetLoginError = {
  error: string;
};

export type TypeResponceLogin = Response<
  TypeResponceSuccessfulLogin | TypeResponcetLoginError
>; // в Responce только два параметра Response<ResBody, Locals>, на место ResBody мы помещаем наш касттмный тип при этом все основные методы Responce(res.status(400) res.json(data) res.send(text) res.redirect()) остаются
