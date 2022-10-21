import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body.projectForm.projectName);

  const {
    projectForm: { projectName },
  } = req.body;

  // res.json({
  //   name: "ProfileSample.png",
  //   price: 9000,
  //   content: projectName,
  // });
}
