import type { NextApiRequest, NextApiResponse } from "next";

async function images(req: NextApiRequest, res: NextApiResponse) {
  //   const { src, file } = req.body;

  console.log(req.body);

  res.json({
    ok: true,
  });
}
