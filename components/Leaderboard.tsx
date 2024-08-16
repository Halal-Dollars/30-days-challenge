import {
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../styles/All.module.scss";
import IconArrowRight from "../assets/icons/ArrowRight";
import IconArrowLeft from "../assets/icons/ArrorLeft";
import Loader from "./Loader";

export type ChallengeType = {
  id: string;
  month: string;
  year: number;
  current: boolean;
  acceptSubmission: boolean;
  startDate: string | Date;
  endDate: string | Date;
};

type LeaderboardType = {
  user: {
    firstName: string;
    lastName: string;
  };
  totalPoints: number;
  aggregatedTasks: {
    upworkOutreach: number;
    socialMediaPosts: number;
    socialMediaEngagements: number;
    jobApplications: number;
    localOutreach: number;
    intlOutreach: number;
    ecommerceDeliveredOrders: number;
    noOfClients: number;
    earningsInDollars: number;
  };
};

const Leaderboard = ({
  setAdminPageChallenges = () => {},
}: {
  setAdminPageChallenges?: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<LeaderboardType[]>([]);
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 10,
    total: 0,
  });
  const [challenges, setChallenges] = useState([]);
  const [activeChallenge, setActiveChallenge] = useState<ChallengeType | null>(
    null
  );
  const [sortBy, setSortBy] = useState("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const [challengePagination, setChallengePagination] = useState({
    hasNext: false,
    hasPrev: false,
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/get-challenges`)
      .then((res) => res.json())
      .then((data: { challenges: ChallengeType[] }) => {
        setChallenges(data?.challenges || []);
        setAdminPageChallenges(data?.challenges || []);
        const activeChallenge = data?.challenges?.[0];
        setActiveChallenge(activeChallenge);
        setChallengePagination({
          hasPrev: data?.challenges?.length > 1,
          hasNext: false,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    let url = `/api/leaderboard?pageSize=${pagination.pageSize}&page=${pagination.page}`;
    if (activeChallenge) {
      url = url + `&challengeId=${activeChallenge.id}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.leaderboard || []);
        setPagination({
          page: data?.pagination?.page || 0,
          pageSize: data?.pagination?.pageSize || 10,
          total: data?.pagination?.total || 0,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [activeChallenge]);

  const onPageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
    let url = `/api/leaderboard?pageSize=${pagination.pageSize}&page=${pagination.page}&challengeId=${activeChallenge.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.leaderboard || []);
        setPagination({
          page: data?.pagination?.page || 0,
          pageSize: data?.pagination?.pageSize || 10,
          total: data?.pagination?.total || 0,
        });
      });
  };

  const handleChallengePagination = (type: "next" | "prev") => {
    let index = challenges.findIndex((c) => c.id === activeChallenge?.id);
    if (type === "prev") {
      index++;
    } else {
      index--;
    }
    const newChallenge = challenges[index];
    setActiveChallenge(newChallenge);
    setChallengePagination({
      hasPrev: index < challenges.length - 1,
      hasNext: index !== 0,
    });
  };

  const handleSort = (key: string) => {
    if (sortBy === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortDir("asc");
    }
  };

  return (
    <Loader spinning={isLoading}>
      {challenges.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center m-6">
          <h4 className={`${styles.leaderboard__title}`}>Leaderboard</h4>
          <h4 className={`${styles.leaderboard__title} !text-[25px]`}>
            No challenges available
          </h4>
        </div>
      ) : (
        <div className={styles.leaderboard}>
          <h4 className={styles.leaderboard__title}>
            {activeChallenge?.month} {activeChallenge?.year}{" "}
            {activeChallenge?.current ? "(Ongoing)" : ""}
          </h4>
          <TableContainer
            component={Paper}
            className={styles.table__container}
            elevation={0}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel
                      active={sortBy === "name"}
                      direction={sortBy === "name" ? sortDir : "asc"}
                      onClick={() => handleSort("name")}
                    >
                      Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="center">Total Points</TableCell>
                  <TableCell align="center">Upwork Outreach</TableCell>
                  <TableCell align="center">Social Media Post</TableCell>
                  <TableCell align="center">Social Media Engagement</TableCell>
                  <TableCell align="center">Job Application</TableCell>
                  <TableCell align="center">Local Outreach</TableCell>
                  <TableCell align="center">Int'l Outreach</TableCell>
                  <TableCell align="center">
                    Ecommerce Delivered Orders
                  </TableCell>
                  <TableCell align="center">Number of Clients</TableCell>
                  <TableCell align="center">Total Earnings ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!isLoading && data.length ? (
                  data.map((row, index) => (
                    <TableRow key={index} className="">
                      <TableCell align="center">{`${row?.user?.firstName} ${row?.user?.lastName}`}</TableCell>
                      <TableCell align="center">{row?.totalPoints}</TableCell>
                      <TableCell align="center">
                        {row?.aggregatedTasks?.upworkOutreach}
                      </TableCell>
                      <TableCell align="center">
                        {row?.aggregatedTasks?.socialMediaPosts}
                      </TableCell>
                      <TableCell align="center">
                        {row?.aggregatedTasks?.socialMediaEngagements}
                      </TableCell>
                      <TableCell align="center">
                        {row?.aggregatedTasks?.jobApplications}
                      </TableCell>
                      <TableCell align="center">
                        {row?.aggregatedTasks?.localOutreach}
                      </TableCell>
                      <TableCell align="center">
                        {row?.aggregatedTasks?.intlOutreach}
                      </TableCell>
                      <TableCell align="center">
                        {row?.aggregatedTasks?.ecommerceDeliveredOrders}
                      </TableCell>
                      <TableCell align="center">
                        {row?.aggregatedTasks?.noOfClients}
                      </TableCell>
                      <TableCell align="center">{0}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell style={{ textAlign: "center" }} colSpan={11}>
                      No data
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {pagination.total < pagination.pageSize && (
            <Pagination
              style={{ marginTop: "1.5rem" }}
              count={Math.ceil(pagination.total / pagination.pageSize)}
              page={pagination.page + 1}
              onChange={(_, page) => onPageChange(page - 1)}
            />
          )}

          <div className={styles.leaderboard__months}>
            <Button
              disabled={!challengePagination.hasPrev}
              variant="outlined"
              startIcon={<IconArrowLeft />}
              onClick={() => handleChallengePagination("prev")}
            >
              Previous
            </Button>
            <p>{activeChallenge?.month}</p>
            <Button
              disabled={!challengePagination.hasNext}
              variant="outlined"
              endIcon={<IconArrowRight />}
              onClick={() => handleChallengePagination("next")}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </Loader>
  );
};

export default Leaderboard;
