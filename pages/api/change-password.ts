import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { hasher } from "../../utils/password";

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

  const { email, password, key } = req.body;

  if (key !== process.env.ADMIN_KEY) {
    return res.status(400).json({
      error: "Invalid admin key",
    });
  }

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (!userExists) {
    return res
      .status(400)
      .json({ error: "User with this email does not exists" });
  }

  const passwordHash = await hasher(password);

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      password: passwordHash,
    },
  });
  res.status(200).json({ message: "Password updated successfully" });
}
