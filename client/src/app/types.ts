export type User = {
  name: string;
  email: string;
  // password?: string;
  userId?: string;
  token: string;
};

export type LoginUserData = {
  email: string;
  password: string;
};
export type RegisterUserData = {
  email: string;
  name: string;
  password: string;
};
