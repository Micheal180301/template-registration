import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type TypeLoginReq = {
  mail: string;
  password: string;
};

/**
 * @route POST /api/user/login
 * @desc логин
 * @access Public
 */

// export const login = async (req, res) => {
//   try {
//   } catch (error) {}
// };
