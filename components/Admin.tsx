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
import Swal from "sweetalert2";

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
    const admin = localStorage.getItem("admin");
    if (admin) {
      console.log("Acdmin>", admin);
      const { key, expiresIn } = JSON.parse(admin);
      if (key !== "hey") {
        setAdminKeyDialogOpen(true);
        setIsLoggedIn(false);
      } else if (expiresIn > Date.now()) {
        setIsLoggedIn(true);
        setAdminKeyDialogOpen(false);
      }
    } else if (!isLoggedIn) {
      setAdminKeyDialogOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!adminKeyDialogOpen && !isLoggedIn) {
      setAdminKeyDialogOpen(true);
    }
  }, [adminKeyDialogOpen]);

  const handleAdminKeySubmit = async (key: string) => {
    if (key === "hey") {
      localStorage.setItem(
        "admin",
        JSON.stringify({
          key,
          expiresIn: Date.now() + 1000 * 60 * 60 * 24,
        })
      );
      setIsLoggedIn(true);
      setAdminKeyDialogOpen(false);
    } else {
      alert("Invalid admin key");
    }
  };

  const toggleDialog = () => {
    setAdminKeyDialogOpen(!adminKeyDialogOpen);
  };

  const createChallenge = async () => {
    setIsLoading(true);
    fetch("/api/create-challenge", {
      method: "POST",
      body: JSON.stringify({ key: "hey" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          Swal.fire({
            title: "Success!",
            text: "Challenge Created Successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: data?.error || "Error creating challenge, please try again",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Loader spinning={isLoading}>
        <div className={styles.admin}>
          <h3 className={styles.admin__title}>Admin Dashboard</h3>

          {/* Create Challenge */}
          {!thisMothChallengeCreated && (
            <>
              <h4 className={styles.admin__sub_header}>
                Create Challenge for this month
              </h4>
              <Button
                variant="contained"
                color="primary"
                onClick={createChallenge}
              >
                Create Challenge
              </Button>
            </>
          )}
          {/* Leaderboard */}
          <h4 className={`${styles.admin__sub_header} !mb-[-20px] !mt-[40px]`}>
            Leaderboard
          </h4>

          <Dialog
            open={adminKeyDialogOpen}
            onClose={toggleDialog}
            PaperProps={{
              component: "form",
              onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(
                  (formData as any).entries()
                );
                const { key } = formJson;
                handleAdminKeySubmit(key);
                toggleDialog();
              },
            }}
          >
            <DialogTitle>Retrieve Unique Code</DialogTitle>
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
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={toggleDialog}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Loader>

      <Leaderboard setAdminPageChallenges={setAdminPageChallenges} />
    </>
  );
};

export default Admin;
