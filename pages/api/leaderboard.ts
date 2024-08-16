import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type ResponseData = {
  leaderboard?: {
    user: {
      firstName: string;
      lastName: string;
    };
    totalPoints: Number;
    aggregatedTasks: {
      upworkOutreach: Number;
      socialMediaPosts: Number;
      socialMediaEngagements: Number;
      jobApplications: Number;
      localOutreach: Number;
      intlOutreach: Number;
      ecommerceDeliveredOrders: Number;
      noOfClients: Number;
      earningsInDollars: Number;
    };
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
    challengeId,
    pageSize = "10",
    page = "0",
    searchQuery,
  } = req.query as {
    challengeId: string;
    pageSize: string;
    page: string;
    searchQuery: string;
  };

  if (!challengeId) {
    const challenge = await prisma.challenge.findFirst({
      where: {
        current: true,
      },
    });
    challengeId = challenge.id;
  }

  if (!challengeId) {
    return res.status(400).json({ error: "No active challenge found" });
  }

  const challenge = await prisma.challenge.findUnique({
    where: {
      id: challengeId,
    },
  });

  if (!challenge) {
    return res.status(400).json({ error: "Challenge not found" });
  }

  const leaderboard = await prisma.userChallenge.findMany({
    where: {
      challengeId,
      OR: searchQuery
        ? [
            {
              user: {
                firstName: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
            },
            {
              user: {
                lastName: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
            },
          ]
        : undefined,
    },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
      TaskSubmission: {
        select: {
          upworkOutreach: true,
          socialMediaPosts: true,
          socialMediaEngagements: true,
          jobApplications: true,
          localOutreach: true,
          intlOutreach: true,
          ecommerceDeliveredOrders: true,
          noOfClients: true,
          earningsInDollars: true,
        },
      },
    },
    orderBy: {
      totalPoints: "desc",
    },
    skip: Number(page) * Number(pageSize),
    take: Number(pageSize),
  });

  const formattedLeaderboard = leaderboard.map((userChallenge) => {
    const aggregatedTasks = userChallenge.TaskSubmission.reduce(
      (acc, task) => {
        acc.upworkOutreach += task.upworkOutreach;
        acc.socialMediaPosts += task.socialMediaPosts;
        acc.socialMediaEngagements += task.socialMediaEngagements;
        acc.jobApplications += task.jobApplications;
        acc.localOutreach += task.localOutreach;
        acc.intlOutreach += task.intlOutreach;
        acc.ecommerceDeliveredOrders += task.ecommerceDeliveredOrders;
        acc.noOfClients += task.noOfClients;
        acc.earningsInDollars += task.earningsInDollars;
        return acc;
      },
      {
        upworkOutreach: 0,
        socialMediaPosts: 0,
        socialMediaEngagements: 0,
        jobApplications: 0,
        localOutreach: 0,
        intlOutreach: 0,
        ecommerceDeliveredOrders: 0,
        noOfClients: 0,
        earningsInDollars: 0,
      }
    );

    return {
      user: userChallenge.user,
      totalPoints: userChallenge.totalPoints,
      aggregatedTasks,
    };
  });

  const totalUserChallenges = await prisma.userChallenge.count({
    where: {
      challengeId,
    },
  });

  const pagination = {
    total: totalUserChallenges,
    pageSize: Number(pageSize),
    page: Number(page),
  };

  res.status(200).json({ leaderboard: formattedLeaderboard, pagination });
}
