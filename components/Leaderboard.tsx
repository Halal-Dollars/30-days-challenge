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
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/All.module.scss";
import IconArrowRight from "../assets/icons/ArrowRight";
import IconArrowLeft from "../assets/icons/ArrorLeft";
import Loader from "./Loader";
import Input from "./Input";

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
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("totalPoints");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const [challengePagination, setChallengePagination] = useState({
    hasNext: false,
    hasPrev: false,
  });

  const [dataChanges, setDataChanges] = useState(false);

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
        setDataChanges((prev) => !prev);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchLeaderboard();
  }, [dataChanges]);

  const fetchLeaderboard = useCallback(() => {
    setIsLoading(true);
    let url = `/api/leaderboard?pageSize=${pagination.pageSize}&page=${pagination.page}`;
    if (activeChallenge) {
      url = url + `&challengeId=${activeChallenge.id}`;
    }
    if (sortBy) {
      url = url + `&sortBy=${sortBy}&sortDir=${sortDir}`;
    }
    if (search.length > 0) {
      url = url + `&searchQuery=${search}`;
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
  }, [activeChallenge, pagination.page, sortDir, sortBy, search]);

  const onPageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
    setDataChanges((prev) => !prev);
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
      setSortDir("desc");
    }
    setPagination((prev) => ({ ...prev, page: 0 }));
    setDataChanges((prev) => !prev);
  };

  const useDebounce = (callback: (val: any) => void, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(null);

    useEffect(() => {
      const handler = setTimeout(() => {
        if (debouncedValue !== null) {
          callback(debouncedValue);
        }
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [debouncedValue, delay, callback]);

    return setDebouncedValue;
  };

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPagination((prev) => ({ ...prev, page: 0 }));
    setDataChanges((prev) => !prev);
  }, []);

  const debouncedHandleSearch = useDebounce(handleSearch, 1000);

  return challenges.length === 0 ? (
    <Loader spinning={isLoading}>
      <div className="w-full flex flex-col items-center justify-center m-6">
        <h4 className={`${styles.leaderboard__title}`}>Leaderboard</h4>
        <h4 className={`${styles.leaderboard__title} !text-[25px]`}>
          No challenges available
        </h4>
      </div>
    </Loader>
  ) : (
    <div className={styles.leaderboard}>
      <div className="w-full flex justify-between max-w-[1200px] px-3 mb-3">
        <h4 className={styles.leaderboard__title}>
          {activeChallenge?.month} {activeChallenge?.year}{" "}
          {activeChallenge?.current ? "(Ongoing)" : ""}
        </h4>
        <Input
          className="max-w-[300px]"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => debouncedHandleSearch(e)}
        />
      </div>
      <Loader spinning={isLoading}>
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
                    direction={sortBy === "name" ? sortDir : "desc"}
                    onClick={() => handleSort("name")}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "totalPoints"}
                    direction={sortBy === "totalPoints" ? sortDir : "desc"}
                    onClick={() => handleSort("totalPoints")}
                  >
                    Total Points
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "upworkOutreach"}
                    direction={sortBy === "upworkOutreach" ? sortDir : "desc"}
                    onClick={() => handleSort("upworkOutreach")}
                  >
                    Upwork Outreach
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "socialMediaPosts"}
                    direction={sortBy === "socialMediaPosts" ? sortDir : "desc"}
                    onClick={() => handleSort("socialMediaPosts")}
                  >
                    Social Media Post
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "socialMediaEngagements"}
                    direction={
                      sortBy === "socialMediaEngagements" ? sortDir : "desc"
                    }
                    onClick={() => handleSort("socialMediaEngagements")}
                  >
                    Social Media Engagement
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "jobApplications"}
                    direction={sortBy === "jobApplications" ? sortDir : "desc"}
                    onClick={() => handleSort("jobApplications")}
                  >
                    Job Application
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "localOutreach"}
                    direction={sortBy === "localOutreach" ? sortDir : "desc"}
                    onClick={() => handleSort("localOutreach")}
                  >
                    Local Outreach
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "intlOutreach"}
                    direction={sortBy === "intlOutreach" ? sortDir : "desc"}
                    onClick={() => handleSort("intlOutreach")}
                  >
                    Int'l Outreach
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "ecommerceDeliveredOrders"}
                    direction={
                      sortBy === "ecommerceDeliveredOrders" ? sortDir : "desc"
                    }
                    onClick={() => handleSort("ecommerceDeliveredOrders")}
                  >
                    Ecommerce Delivered Orders
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "noOfClients"}
                    direction={sortBy === "noOfClients" ? sortDir : "desc"}
                    onClick={() => handleSort("noOfClients")}
                  >
                    Number of Clients
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "earningsInDollars"}
                    direction={
                      sortBy === "earningsInDollars" ? sortDir : "desc"
                    }
                    onClick={() => handleSort("earningsInDollars")}
                  >
                    Total Earnings ($)
                  </TableSortLabel>
                </TableCell>
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
      </Loader>
    </div>
  );
};

export default Leaderboard;
