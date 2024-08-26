import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { hasher, verifier } from "../../utils/password";

type ResponseData = {
  message?: string;
  user?: any;
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

  const { email, password } = JSON.parse(req.body);

  const userExists = await prisma.user.findUnique({
    where: { email },
    select: {
      email: true,
      firstName: true,
      lastName: true,
      linkedInLink: true,
      upworkLink: true,
      facebookLink: true,
      twitterLink: true,
      funnelLink: true,
      mediumLink: true,
      goHighLevelAccountName: true,
      phoneNumber: true,
      createdAt: true,
      password: true,
    }
  });

  if (!userExists) {
    return res
      .status(400)
      .json({ error: "Invalid credentials, please try again" });
  }

  const passwordMatch = await verifier(password, userExists.password);

  if (!passwordMatch) {
    return res
      .status(400)
      .json({ error: "Invalid credentials, please try again" });
  }

  delete userExists.password;

  res
    .status(200)
    .json({ message: "Login successful", user: userExists });
}
