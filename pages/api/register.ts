import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import {argonHasher} from "../../utils/password";


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

  console.log("req.body>> received request", req.body);

  const {
    firstName,
    lastName,
    email,
    password,
    linkedInLink,
    upworkLink,
    facebookLink,
    twitterLink,
    funnelLink,
    mediumLink,
    goHighLevelAccountName,
    phoneNumber,
  } = JSON.parse(req.body);

  const emailAlreadyExists = await prisma.user.findUnique({
    where: { email },
  });

  if (emailAlreadyExists) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const getUniqueCode = async () => {
    const uniqueCode = generateUniqueCode({ length: 6 });
    const user = await prisma.user.findUnique({
      where: { uniqueCode },
    });
    if (user) {
      return getUniqueCode();
    }
    return uniqueCode;
  };

  const uniqueCode = await getUniqueCode();

  const passwordHash = await argonHasher(password);

  await prisma.user.create({
    data: {
      uniqueCode,
      firstName,
      lastName,
      email,
      password: passwordHash,
      linkedInLink,
      upworkLink,
      facebookLink,
      twitterLink,
      funnelLink,
      mediumLink,
      goHighLevelAccountName,
      phoneNumber,
    },
  });
  res.status(200).json({ uniqueCode });
}

export const generateUniqueCode = (options: { length?: number }) => {
  const seed = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const length = options.length || 6;

  let output = "";
  for (let i = 0; i < length; i++) {
    output += seed[Math.floor(Math.random() * seed.length)];
  }

  const result = output.charAt(0) === "0" ? `9${output.slice(1)}` : output;

  return result;
};
