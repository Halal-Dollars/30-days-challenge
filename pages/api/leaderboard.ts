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
      earningsInNaira: Number;
      projects: Number;
      jobSecured: Number;
      opportunities: Number;
      coldCalls: Number;
      coldEmails: Number;
      coldSms: Number;
      coldDms: Number;
      walkIns: Number;
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
    challengeId = challenge?.id;
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
          earningsInNaira: true,
          projects: true,
          jobSecured: true,
          opportunities: true,
          coldCalls: true,
          coldEmails: true,
          coldSms: true,
          coldDms: true,
          walkIns: true,
        },
      },
    },
  });

  // Step 2: Aggregate and sort by upworkOutreach
  formattedLeaderboard = leaderboardData.map((userChallenge) => {
    const aggregatedTasks = userChallenge.TaskSubmission.reduce(
      (acc, task) => {
        acc.earningsInNaira += task.earningsInNaira;
        acc.projects += task.projects;
        acc.jobSecured += task.jobSecured;
        acc.opportunities += task.opportunities;
        acc.coldCalls += task.coldCalls;
        acc.coldEmails += task.coldEmails;
        acc.coldSms += task.coldSms;
        acc.coldDms += task.coldDms;
        acc.walkIns += task.walkIns;
        return acc;
      },
      {
        earningsInNaira: 0,
        projects: 0,
        jobSecured: 0,
        opportunities: 0,
        coldCalls: 0,
        coldEmails: 0,
        coldSms: 0,
        coldDms: 0,
        walkIns: 0,
      }
    );

    return {
      user: userChallenge.user,
      totalPoints: userChallenge.totalPoints,
      aggregatedTasks,
    };
  });

  if (!sortBy) {
    sortBy = "earningsInNaira";
  }

  switch (sortBy) {
    case "earningsInNaira":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.earningsInNaira -
            a.aggregatedTasks.earningsInNaira
          : a.aggregatedTasks.earningsInNaira -
            b.aggregatedTasks.earningsInNaira
      );
      break;
    case "projects":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.projects - a.aggregatedTasks.projects
          : a.aggregatedTasks.projects - b.aggregatedTasks.projects
      );
      break;

    case "jobSecured":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.jobSecured - a.aggregatedTasks.jobSecured
          : a.aggregatedTasks.jobSecured - b.aggregatedTasks.jobSecured
      );
      break;
    case "opportunities":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.opportunities - a.aggregatedTasks.opportunities
          : a.aggregatedTasks.opportunities - b.aggregatedTasks.opportunities
      );
      break;
    case "coldCalls":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.coldCalls - a.aggregatedTasks.coldCalls
          : a.aggregatedTasks.coldCalls - b.aggregatedTasks.coldCalls
      );
      break;
    case "coldEmails":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.coldEmails - a.aggregatedTasks.coldEmails
          : a.aggregatedTasks.coldEmails - b.aggregatedTasks.coldEmails
      );
      break;
    case "coldSms":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.coldSms - a.aggregatedTasks.coldSms
          : a.aggregatedTasks.coldSms - b.aggregatedTasks.coldSms
      );
      break;
    case "coldDms":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.coldDms - a.aggregatedTasks.coldDms
          : a.aggregatedTasks.coldDms - b.aggregatedTasks.coldDms
      );
      break;
    case "walkIns":
      formattedLeaderboard = formattedLeaderboard.sort((a, b) =>
        sortDir === "desc"
          ? b.aggregatedTasks.walkIns - a.aggregatedTasks.walkIns
          : a.aggregatedTasks.walkIns - b.aggregatedTasks.walkIns
      );
    default:
      break;
  }

  // Step 3: Apply pagination
  formattedLeaderboard = formattedLeaderboard.slice(
    Number(page) * Number(pageSize),
    (Number(page) + 1) * Number(pageSize)
  );

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
