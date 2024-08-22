import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import styles from "../styles/All.module.scss";
import Swal from "sweetalert2";

const CreateChallenge = ({
  setIsLoading,
}: {
  setIsLoading: (val: boolean) => void;
}) => {
  const [createChallengeDialog, setCreateChallengeDialog] = useState(false);

  const toggleCreateChallengeDialog = () => {
    setCreateChallengeDialog(!createChallengeDialog);
  };

  const handleCreateChallenge = async (key: string) => {
    setIsLoading(true);
    fetch("/api/create-challenge", {
      method: "POST",
      body: JSON.stringify({ key }),
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
      <h4 className={styles.admin__sub_header}>
        Create Challenge for this month
      </h4>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleCreateChallengeDialog}
      >
        Create Challenge
      </Button>

      <Dialog
        open={createChallengeDialog}
        onClose={toggleCreateChallengeDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const { key } = formJson;
            handleCreateChallenge(key);
            toggleCreateChallengeDialog();
          },
        }}
      >
        <DialogTitle>Create challenge for this month</DialogTitle>
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
          <Button onClick={toggleCreateChallengeDialog}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateChallenge;
