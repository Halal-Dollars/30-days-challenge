import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type ResponseData = {
  challenges?: any[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }

  const challenges = await prisma.challenge.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json({ challenges });
}
