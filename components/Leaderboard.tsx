import {
  Button,
  MenuItem,
  Pagination,
  Paper,
  Select,
  SelectChangeEvent,
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
    uniqueCode: string;
  };
  totalPoints: number;
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
  const [sortBy, setSortBy] = useState("earningsInNaira");
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
  }, [activeChallenge, pagination, sortDir, sortBy, search]);

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

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setPagination({
      ...pagination,
      pageSize: Number(event.target.value),
    });
    setDataChanges((prev) => !prev);
  };

  return challenges.length === 0 ? (
    <Loader spinning={isLoading}>
      <div className="w-full flex flex-col items-center justify-center my-6 px-3">
        <h4 className={`${styles.leaderboard__title}`}>Leaderboard</h4>
        <h4
          className={`${styles.leaderboard__title} sm:!text-[25px] !text-[20px]`}
        >
          No challenges available
        </h4>
      </div>
    </Loader>
  ) : (
    <div className={styles.leaderboard}>
      <h4 className={styles.join_banner__title}>Leaderboard</h4>
      <div className={styles.leaderboard__header}>
        <h4 className={styles.leaderboard__title}>
          {activeChallenge?.month} {activeChallenge?.year}{" "}
          {activeChallenge?.current ? "(Ongoing)" : ""}
        </h4>
        <Input
          className="max-w-[300px] mt-0"
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
                <TableCell>Position</TableCell>
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
                    active={sortBy === "earningsInNaira"}
                    direction={sortBy === "earningsInNaira" ? sortDir : "desc"}
                    onClick={() => handleSort("earningsInNaira")}
                  >
                    Total Earnings (&#8358;)
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "projects"}
                    direction={sortBy === "projects" ? sortDir : "desc"}
                    onClick={() => handleSort("projects")}
                  >
                    Projects
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "opportunities"}
                    direction={sortBy === "opportunities" ? sortDir : "desc"}
                    onClick={() => handleSort("opportunities")}
                  >
                    Opportunities
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "jobSecured"}
                    direction={sortBy === "jobSecured" ? sortDir : "desc"}
                    onClick={() => handleSort("jobSecured")}
                  >
                    Job Secured
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "coldCalls"}
                    direction={sortBy === "coldCalls" ? sortDir : "desc"}
                    onClick={() => handleSort("coldCalls")}
                  >
                    Cold Calls
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "coldEmails"}
                    direction={sortBy === "coldEmails" ? sortDir : "desc"}
                    onClick={() => handleSort("coldEmails")}
                  >
                    Cold Emails
                  </TableSortLabel>
                </TableCell>

                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "coldSms"}
                    direction={sortBy === "coldSms" ? sortDir : "desc"}
                    onClick={() => handleSort("coldSms")}
                  >
                    Cold SMS
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "coldDms"}
                    direction={sortBy === "coldDms" ? sortDir : "desc"}
                    onClick={() => handleSort("coldDms")}
                  >
                    Cold DMs
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortBy === "walkIns"}
                    direction={sortBy === "walkIns" ? sortDir : "desc"}
                    onClick={() => handleSort("walkIns")}
                  >
                    Walk Ins
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading && data.length ? (
                data.map((row, index) => (
                  <TableRow key={index} className="">
                    <TableCell>
                      {index + 1 + pagination.page * pagination.pageSize}
                    </TableCell>
                    <TableCell align="center">
                      {row?.user?.uniqueCode}
                    </TableCell>
                    <TableCell align="center">
                      {row?.aggregatedTasks?.earningsInNaira
                        ? Number(
                            row?.aggregatedTasks?.earningsInNaira
                          )?.toLocaleString()
                        : "---"}
                    </TableCell>
                    <TableCell align="center">
                      {String(row?.aggregatedTasks?.projects)}
                    </TableCell>
                    <TableCell align="center">
                      {String(row?.aggregatedTasks?.jobSecured)}
                    </TableCell>
                    <TableCell align="center">
                      {String(row?.aggregatedTasks?.opportunities)}
                    </TableCell>
                    <TableCell align="center">
                      {String(row?.aggregatedTasks?.coldCalls)}
                    </TableCell>
                    <TableCell align="center">
                      {String(row?.aggregatedTasks?.coldEmails)}
                    </TableCell>

                    <TableCell align="center">
                      {String(row?.aggregatedTasks?.coldSms)}
                    </TableCell>
                    <TableCell align="center">
                      {String(row?.aggregatedTasks?.coldDms)}
                    </TableCell>
                    <TableCell align="center">
                      {String(row?.aggregatedTasks?.walkIns)}
                    </TableCell>
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
        <div className="w-full max-w-[1200px] flex flex-row items-center justify-between mt-3">
          <div className="flex flex-row items-center gap-3">
            <p>Rows per page: </p>
            <Select
              value={pagination.pageSize.toString()}
              onChange={handleChange}
              className="h-[40px]"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </div>
          {pagination.total > pagination.pageSize && (
            <Pagination
              style={{ marginTop: "1.5rem" }}
              count={Math.ceil(pagination.total / pagination.pageSize)}
              page={pagination.page + 1}
              onChange={(_, page) => onPageChange(page - 1)}
            />
          )}
        </div>

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
