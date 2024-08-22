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
import Loader from "./Loader";

const ChangeUserPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [changePasswordDialog, setChangePasswordDialog] = useState(false);

  const toggleChangePasswordDialog = () => {
    setChangePasswordDialog(!changePasswordDialog);
  };

  const handleChangePassword = async (
    key: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    fetch("/api/change-password", {
      method: "POST",
      body: JSON.stringify({ key, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          Swal.fire({
            title: "Success!",
            text: "User Password Changed Successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text:
              data?.error || "Error changing user password, please try again",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Loader spinning={isLoading}>
      <div className="w-full flex flex-col justify-center items-center mt-3 mb-10">
        <h4 className={styles.admin__sub_header}>Change User Password</h4>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleChangePasswordDialog}
        >
          Change password
        </Button>

        <Dialog
          open={changePasswordDialog}
          onClose={toggleChangePasswordDialog}
          PaperProps={{
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const { key, email, password } = formJson;
              handleChangePassword(key, email, password);
              toggleChangePasswordDialog();
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
            <TextField
              required
              margin="dense"
              id="email"
              name="email"
              label="User Email"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              margin="dense"
              id="password"
              name="password"
              label="New Password"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleChangePasswordDialog}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Loader>
  );
};

export default ChangeUserPassword;
