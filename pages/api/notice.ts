import { prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    noticeForm: { title, categories, hashtag, content },
  } = req.body;

  console.log(title, categories, hashtag, content);

  res.json({ ok: true });
}

export default handler;
