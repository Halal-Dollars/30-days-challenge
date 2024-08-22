import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const TASK_SUBMISSION_POINTS = {
  upworkOutreach: 5,
  socialMediaPosts: 3,
  socialMediaEngagements: 1,
  jobApplications: 5,
  localOutreach: 2,
  intlOutreach: 3,
  ecommerceDeliveredOrders: 5,
  noOfClients: 20,
  earningsInDollars: 1,
};

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

  const {
    uniqueCode,
    upworkOutreach,
    socialMediaPosts,
    socialMediaEngagements,
    jobApplications,
    localOutreach,
    intlOutreach,
    ecommerceDeliveredOrders,
    noOfClients,
    earningsInDollars,
  } = JSON.parse(req.body);

  const user = await prisma.user.findUnique({
    where: { uniqueCode },
  });
  if (!user) {
    return res.status(400).json({
      error: "Unique code does not exist, kindly confirim and try again!",
    });
  }

  // check if there's ongoing challenge
  const ongoingChallenge = await prisma.challenge.findFirst({
    where: {
      current: true,
    },
  });

  if (!ongoingChallenge) {
    return res.status(400).json({ error: "No ongoing challenge" });
  }

  if (!ongoingChallenge.acceptSubmission) {
    return res.status(400).json({
      error: "This challenge does not accept response at the moment.",
    });
  }

  //   check if submitted today already
  const taskAlreadySubmited = await prisma.taskSubmission.findFirst({
    where: {
      userChallenge: {
        userId: user.id,
        challengeId: ongoingChallenge.id,
      },
      date: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
        lt: new Date(new Date().setHours(23, 59, 59, 999)),
      },
    },
  });
  if (taskAlreadySubmited) {
    return res.status(400).json({ error: "Task already submitted today" });
  }

  // check if userChallenge exists
  let userChallenge = await prisma.userChallenge.findFirst({
    where: {
      userId: user.id,
      challengeId: ongoingChallenge.id,
    },
  });

  if (!userChallenge) {
    userChallenge = await prisma.userChallenge.create({
      data: {
        userId: user.id,
        challengeId: ongoingChallenge.id,
      },
    });
  }

  // calculating total points
  const totalPoints =
    (Number(upworkOutreach) || 0) * TASK_SUBMISSION_POINTS.upworkOutreach +
    (Number(socialMediaPosts) || 0) * TASK_SUBMISSION_POINTS.socialMediaPosts +
    (Number(socialMediaEngagements) || 0) *
      TASK_SUBMISSION_POINTS.socialMediaEngagements +
    (Number(jobApplications) || 0) * TASK_SUBMISSION_POINTS.jobApplications +
    (Number(localOutreach) || 0) * TASK_SUBMISSION_POINTS.localOutreach +
    (Number(intlOutreach) || 0) * TASK_SUBMISSION_POINTS.intlOutreach +
    (Number(ecommerceDeliveredOrders) || 0) *
      TASK_SUBMISSION_POINTS.ecommerceDeliveredOrders +
    (Number(noOfClients) || 0) * TASK_SUBMISSION_POINTS.noOfClients +
    (Number(earningsInDollars) || 0) * TASK_SUBMISSION_POINTS.earningsInDollars;

  // update userChallenge point
  await prisma.userChallenge.update({
    where: {
      id: userChallenge.id,
    },
    data: {
      totalPoints: { increment: totalPoints },
    },
  });

  await prisma.taskSubmission.create({
    data: {
      userChallengeId: userChallenge.id,
      upworkOutreach: Number(upworkOutreach) || 0,
      socialMediaPosts: Number(socialMediaPosts) || 0,
      socialMediaEngagements: Number(socialMediaEngagements) || 0,
      jobApplications: Number(jobApplications) || 0,
      localOutreach: Number(localOutreach) || 0,
      intlOutreach: Number(intlOutreach) || 0,
      ecommerceDeliveredOrders: Number(ecommerceDeliveredOrders) || 0,
      noOfClients: Number(noOfClients) || 0,
      earningsInDollars: Number(earningsInDollars) || 0,
    },
  });
  res.status(200).json({message: "Task submitted successfully"});
}
