import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { decrypt } from "../../utils/password";

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

  const { email, password } = req.body;

  const adminEmail = await prisma.adminConfig.findFirst({
    where: {
      key: process.env.ADMIN_EMAIL_KEY,
    },
  });

  if (!adminEmail) {
    res.status(401).json({
      error:
        "Kindly reach out to admin support or developer if you are seeing this",
    });
  }

  const adminPassword = await prisma.adminConfig.findFirst({
    where: {
      key: process.env.ADMIN_PASSWORD_KEY,
    },
  });

  if (!adminPassword) {
    res.status(401).json({
      error:
        "Kindly reach out to admin support or developer if you are seeing this",
    });
  }

  const passwordHash = decrypt(adminPassword?.value);

  if (
    email.length &&
    password.length &&
    email?.toLowerCase() === adminEmail?.value?.toLowerCase() &&
    password === passwordHash
  ) {
    res
      .status(200)
      .json({ message: "Login successful", user: { email, password } });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
}
