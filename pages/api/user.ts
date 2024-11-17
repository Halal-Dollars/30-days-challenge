import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type ResponseData = {
  users: {
    email: string;
    firstName: string;
    lastName: string;
    subAccountId: string;
    phoneNumber: string;
    createdAt: string | Date;
  }[];
  pagination?: {
    total: Number;
    pageSize: Number;
    page: Number;
  };
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

  let {
    pageSize = "10",
    page = "0",
    searchQuery,
    sortDir = "desc",
  } = req.query as {
    pageSize: string;
    page: string;
    searchQuery: string;
    sortDir: "asc" | "desc";
  };

  const users = await prisma.user.findMany({
    where: {
      OR: searchQuery
        ? [
            {
              firstName: {
                contains: searchQuery,
                mode: "insensitive",
              },
            },
            {
              lastName: {
                contains: searchQuery,
                mode: "insensitive",
              },
            },
          ]
        : undefined,
    },
    select: {
      email: true,
      firstName: true,
      lastName: true,
      subAccountId: true,
      phoneNumber: true,
      createdAt: true,
    },
    orderBy: {
      firstName: sortDir,
    },
    skip: Number(page) * Number(pageSize),
    take: Number(pageSize),
  });

  const totalUsers = await prisma.user.count({
    where: {
      OR: searchQuery
        ? [
            {
              firstName: {
                contains: searchQuery,
                mode: "insensitive",
              },
            },
            {
              lastName: {
                contains: searchQuery,
                mode: "insensitive",
              },
            },
          ]
        : undefined,
    },
  });

  const pagination = {
    total: totalUsers,
    pageSize: Number(pageSize),
    page: Number(page),
  };

  res.status(200).json({ users, pagination });
}
