import client from "@libs/server/client";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const notices = await client.notice.findMany({});

  console.log(notices);

  res.json({ ok: true, notices });
}

export default handler;
