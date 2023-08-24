import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, id } = req.body;

  if (!email) {
    return res.status(400).json({
      ok: false,
    });
  }
}
