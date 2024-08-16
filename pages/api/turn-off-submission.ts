import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type ResponseData = {
  challenges?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }

  const { key, challengeId } = JSON.parse(req.body);
  if (key !== process.env.ADMIN_KEY) {
    return res.status(400).json({
      error: "Invalid admin key",
    });
  }

  await prisma.challenge.update({
    where: {
      id: challengeId
    },
    data: {
      acceptSubmission: false,
    },
  });

  const challenges = await prisma.challenge.findMany();

  res.status(200).json({ challenges });
}
