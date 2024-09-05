import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import styles from "../styles/All.module.scss";
import Leaderboard, { ChallengeType } from "./Leaderboard";
import Loader from "./Loader";
import UserData from "./UserData";
import CreateChallenge from "./CreateChallenge";
import ChangeUserPassword from "./ChangeUserPassword";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminKeyDialogOpen, setAdminKeyDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [adminPageChallenges, setAdminPageChallenges] = useState<
    ChallengeType[]
  >([]);
  const [thisMothChallengeCreated, setThisMothChallengeCreated] =
    useState(false);

  useEffect(() => {
    const date = new Date();
    const month = date
      .toLocaleString("default", { month: "long" })
      ?.toLowerCase();
    const year = date.getFullYear();
    const thisMonthChallenge = adminPageChallenges.find(
      (challenge) =>
        challenge.year === year && challenge.month?.toLowerCase() === month
    );
    if (thisMonthChallenge) {
      setThisMothChallengeCreated(true);
    } else {
      setThisMothChallengeCreated(false);
    }
  }, [adminPageChallenges]);

  useEffect(() => {
    if (!adminKeyDialogOpen && !isLoggedIn) {
      setAdminKeyDialogOpen(true);
    }
  }, [adminKeyDialogOpen]);

  const handleAdminKeySubmit = async (key: string) => {
    if (key === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      setIsLoggedIn(true);
      setAdminKeyDialogOpen(false);
    } else {
      alert("Invalid admin key");
    }
  };

  const toggleDialog = () => {
    setAdminKeyDialogOpen(!adminKeyDialogOpen);
  };

  return (
    <>
      <div className={styles.admin}>
        <Loader spinning={isLoading}>
          <h3 className={styles.admin__title}>Admin Dashboard</h3>

          {/* Create Challenge */}
          {thisMothChallengeCreated && (
            <CreateChallenge setIsLoading={setIsLoading} />
          )}
        </Loader>

        {/* Leaderboard */}
        <h4 className={`${styles.admin__sub_header} !mb-[-20px] !mt-[40px]`}>
          Leaderboard
        </h4>
      </div>

      <Leaderboard setAdminPageChallenges={setAdminPageChallenges} />
      <UserData />
      <ChangeUserPassword />

      <Dialog
        open={adminKeyDialogOpen}
        onClose={toggleDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const { key } = formJson;
            handleAdminKeySubmit(key);
            toggleDialog();
          },
        }}
      >
        <DialogTitle>Admin Key</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="key"
            name="key"
            label="Admin Key"
            type="text"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Admin;
