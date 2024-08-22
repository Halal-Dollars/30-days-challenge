import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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

type UserDataType = {
  email: string;
  firstName: string;
  lastName: string;
  linkedInLink: string;
  upworkLink: string;
  facebookLink: string;
  twitterLink: string;
  funnelLink: string;
  mediumLink: string;
  goHighLevelAccountName: string;
  phoneNumber: string;
  createdAt: string | Date;
};

const UserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<UserDataType[]>([]);
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 10,
    total: 0,
  });

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("totalPoints");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [viewUserData, setViewUserData] = useState<UserDataType | null>(null);
  const [viewUserDataDialog, setViewUserDataDialog] = useState(false);

  const [dataChanges, setDataChanges] = useState(false);

  useEffect(() => {
    fetchLeaderboard();
  }, [dataChanges]);

  const fetchLeaderboard = useCallback(() => {
    setIsLoading(true);
    let url = `/api/user?pageSize=${pagination.pageSize}&page=${pagination.page}`;
    if (sortDir) {
      url = url + `&sortDir=${sortDir}`;
    }
    if (search.length > 0) {
      url = url + `&searchQuery=${search}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.users || []);
        setPagination({
          page: data?.pagination?.page || 0,
          pageSize: data?.pagination?.pageSize || 10,
          total: data?.pagination?.total || 0,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pagination.page, sortDir, sortBy, search]);

  const onPageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
    setDataChanges((prev) => !prev);
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

  const handleViewData = (row: UserDataType) => {
    toggleUserDataDialog();
    setViewUserData(row);
  };

  const toggleUserDataDialog = () => {
    setViewUserDataDialog((prev) => !prev);
    setViewUserData(null);
  };

  return data.length === 0 ? (
    <Loader spinning={isLoading}>
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center m-6">
        <h4 className={`${styles.leaderboard__title}`}>User Records</h4>
        <h4 className={`${styles.leaderboard__title} !text-[25px]`}>
          No user record
        </h4>
      </div>
    </Loader>
  ) : (
    <div className={styles.leaderboard}>
      <div className="w-full flex justify-between max-w-[1200px] px-3 mb-3">
        <h4 className={styles.leaderboard__title}>User Records</h4>
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
                <TableCell align="left">View Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading && data.length ? (
                data.map((row, index) => (
                  <TableRow key={index} className="">
                    <TableCell align="left">{`${row?.firstName} ${row?.lastName}`}</TableCell>
                    <TableCell
                      align="left"
                      onClick={() => {
                        handleViewData(row);
                      }}
                    >
                      <Button variant="contained">View Data</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell style={{ textAlign: "center" }} colSpan={11}>
                    No user record
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

        <Dialog open={viewUserDataDialog} onClose={toggleUserDataDialog}>
          <DialogTitle>User Data</DialogTitle>
          <DialogContent>
            <div>
              <h4 className="mb-2">
                <span className="font-bold">First Name:</span>
                <span>{viewUserData?.firstName}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Last Name:</span>
                <span>{viewUserData?.lastName}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Email: </span>
                <span>{viewUserData?.email}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">LinkedIn:</span>
                <span>{viewUserData?.linkedInLink}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Upwork:</span>
                <span>{viewUserData?.upworkLink}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Facebook: </span>
                <span>{viewUserData?.facebookLink}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Twitter: </span>
                <span>{viewUserData?.twitterLink}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Funnel: </span>
                <span>{viewUserData?.funnelLink}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Medium: </span>
                <span>{viewUserData?.mediumLink}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Go High Level Account Name:</span>
                <span>{viewUserData?.goHighLevelAccountName}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Phone Number: </span>
                <span>{viewUserData?.phoneNumber}</span>
              </h4>
              <h4 className="mb-2">
                <span className="font-bold">Created At:</span>
                <span>{new Date(viewUserData?.createdAt)?.toDateString()}</span>
              </h4>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleUserDataDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Loader>
    </div>
  );
};

export default UserData;
