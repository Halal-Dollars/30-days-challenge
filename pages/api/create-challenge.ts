import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type ResponseData = {
  message?: string;
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

  const { key } = req.body;
  if (key !== process.env.ADMIN_KEY) {
    return res.status(400).json({
      error: "Invalid admin key",
    });
  }

  const date = new Date();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const challenge = await prisma.challenge.findFirst({
    where: {
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
    },
  });

  if (challenge) {
    return res.status(400).json({
      error: "Challenge already created for this month",
    });
  }

  //   update all challenges to not current
  await prisma.challenge.updateMany({
    where: {
      current: true,
    },
    data: {
      current: false,
      acceptSubmission: false,
    },
  });

  await prisma.challenge.create({
    data: {
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
      startDate: date,
      endDate: lastDay,
      current: true,
      acceptSubmission: true,
    },
  });

  res.status(200).json({ message: "Challenge created successfully" });
}
