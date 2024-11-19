import React, { useState } from "react";
import { Button } from "@mui/material";
import styles from "../styles/All.module.scss";
import Swal from "sweetalert2";

const CreateChallenge = ({
  setIsLoading,
}: {
  setIsLoading: (val: boolean) => void;
}) => {
  const handleCreateChallenge = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        fetch("/api/create-challenge", {
          method: "POST",
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
                text:
                  data?.error || "Error creating challenge, please try again",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }
          })
          .finally(() => setIsLoading(false));
      }
    });
  };

  return (
    <>
      <h4 className={styles.admin__sub_header}>
        Create Challenge for this month
      </h4>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateChallenge}
      >
        Create Challenge
      </Button>
    </>
  );
};

export default CreateChallenge;
