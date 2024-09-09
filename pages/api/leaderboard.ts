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
      opportunities: Number;
      jobSecured: Number;
      earningsInNaira: Number;
      socialGroupPost: Number;
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
    sortBy,
    sortDir = "desc",
  } = req.query as {
    challengeId: string;
    pageSize: string;
    page: string;
    searchQuery: string;
    sortBy: string;
    sortDir: "asc" | "desc";
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

  let formattedLeaderboard = [];

  if (sortBy && sortBy !== "totalPoints") {
    const leaderboardData = await prisma.userChallenge.findMany({
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
            // opportunities: true,
            // jobSecured: true,
            // earningsInNaira: true,
            // socialGroupPost: true,
          },
        },
      },
    });

    // Step 2: Aggregate and sort by upworkOutreach
    formattedLeaderboard = leaderboardData.map((userChallenge) => {
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
          // acc.opportunities += task.opportunities;
          // acc.jobSecured += task.jobSecured;
          // acc.earningsInNaira += task.earningsInNaira;
          // acc.socialGroupPost += task.socialGroupPost;
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
          // opportunities: 0,
          // jobSecured: 0,
          // earningsInNaira: 0,
          // socialGroupPost: 0,
        }
      );

      return {
        user: userChallenge.user,
        totalPoints: userChallenge.totalPoints,
        aggregatedTasks,
      };
    });

    switch (sortBy) {
      case "upworkOutreach":
        console.log("Log>>>", sortBy, sortDir);
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.upworkOutreach -
              a.aggregatedTasks.upworkOutreach
            : a.aggregatedTasks.upworkOutreach -
              b.aggregatedTasks.upworkOutreach
        );
        break;
      case "socialMediaPosts":
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.socialMediaPosts -
              a.aggregatedTasks.socialMediaPosts
            : a.aggregatedTasks.socialMediaPosts -
              b.aggregatedTasks.socialMediaPosts
        );
        break;

      case "socialMediaEngagements":
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.socialMediaEngagements -
              a.aggregatedTasks.socialMediaEngagements
            : a.aggregatedTasks.socialMediaEngagements -
              b.aggregatedTasks.socialMediaEngagements
        );
        break;
      case "jobApplications":
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.jobApplications -
              a.aggregatedTasks.jobApplications
            : a.aggregatedTasks.jobApplications -
              b.aggregatedTasks.jobApplications
        );
        break;
      case "localOutreach":
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.localOutreach - a.aggregatedTasks.localOutreach
            : a.aggregatedTasks.localOutreach - b.aggregatedTasks.localOutreach
        );
        break;
      case "intlOutreach":
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.intlOutreach - a.aggregatedTasks.intlOutreach
            : a.aggregatedTasks.intlOutreach - b.aggregatedTasks.intlOutreach
        );
        break;
      case "ecommerceDeliveredOrders":
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.ecommerceDeliveredOrders -
              a.aggregatedTasks.ecommerceDeliveredOrders
            : a.aggregatedTasks.ecommerceDeliveredOrders -
              b.aggregatedTasks.ecommerceDeliveredOrders
        );
        break;
      case "noOfClients":
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.noOfClients - a.aggregatedTasks.noOfClients
            : a.aggregatedTasks.noOfClients - b.aggregatedTasks.noOfClients
        );
        break;
      case "earningsInDollars":
        formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
          sortDir === "desc"
            ? b.aggregatedTasks.earningsInDollars -
              a.aggregatedTasks.earningsInDollars
            : a.aggregatedTasks.earningsInDollars -
              b.aggregatedTasks.earningsInDollars
        );
      // case "opportunities":
      //   formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
      //     sortDir === "desc"
      //       ? b.aggregatedTasks.opportunities - a.aggregatedTasks.opportunities
      //       : a.aggregatedTasks.opportunities - b.aggregatedTasks.opportunities
      //   );
      // case "jobSecured":
      //   formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
      //     sortDir === "desc"
      //       ? b.aggregatedTasks.jobSecured - a.aggregatedTasks.jobSecured
      //       : a.aggregatedTasks.jobSecured - b.aggregatedTasks.jobSecured
      //   );
      // case "earningsInNaira":
      //   formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
      //     sortDir === "desc"
      //       ? b.aggregatedTasks.earningsInNaira -
      //         a.aggregatedTasks.earningsInNaira
      //       : a.aggregatedTasks.earningsInNaira -
      //         b.aggregatedTasks.earningsInNaira
      //   );
      //   break;
      // case "socialGroupPost":
      //   formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
      //     sortDir === "desc"
      //       ? b.aggregatedTasks.socialGroupPost -
      //         a.aggregatedTasks.socialGroupPost
      //       : a.aggregatedTasks.socialGroupPost -
      //         b.aggregatedTasks.socialGroupPost
      //   );
        break;
      default:
        break;
    }

    // Step 3: Apply pagination
    formattedLeaderboard = formattedLeaderboard.slice(
      Number(page) * Number(pageSize),
      (Number(page) + 1) * Number(pageSize)
    );
  } else {
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
            // opportunities: true,
            // jobSecured: true,
            // earningsInNaira: true,
            // socialGroupPost: true,
          },
        },
      },
      orderBy: {
        totalPoints: sortDir,
      },
      skip: Number(page) * Number(pageSize),
      take: Number(pageSize),
    });

    formattedLeaderboard = leaderboard.map((userChallenge) => {
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
          // acc.opportunities += task.opportunities;
          // acc.jobSecured += task.jobSecured;
          // acc.earningsInNaira += task.earningsInNaira;
          // acc.socialGroupPost += task.socialGroupPost;
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
          // opportunities: 0,
          // jobSecured: 0,
          // earningsInNaira: 0,
          // socialGroupPost: 0,
        }
      );

      return {
        user: userChallenge.user,
        totalPoints: userChallenge.totalPoints,
        aggregatedTasks,
      };
    });
  }

  const totalUserChallenges = await prisma.userChallenge.count({
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
  });

  const pagination = {
    total: totalUserChallenges,
    pageSize: Number(pageSize),
    page: Number(page),
  };

  res.status(200).json({ leaderboard: formattedLeaderboard, pagination });
}
