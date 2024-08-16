import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { argonVerifier } from "../../utils/password";

type ResponseData = {
  uniqueCode?: string;
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

  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    return res.status(400).json({
      error: "User not found with this details, kindly confirim and try again!",
    });
  }

  const passwordMatch = await argonVerifier(password, user.password);

  if (!passwordMatch) {
    return res.status(400).json({
      error: "User not found with this details, kindly confirim and try again!",
    });
  }

  res.status(200).json({ uniqueCode: user.uniqueCode });
}
