"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/All.module.scss";
import Leaderboard, { ChallengeType } from "./Leaderboard";
import Loader from "./Loader";
import CreateChallenge from "./CreateChallenge";
import { useUserStore } from "../store/user";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const [isLoading, setIsLoading] = useState(false);
  const [adminPageChallenges, setAdminPageChallenges] = useState<
    ChallengeType[]
  >([]);
  const [thisMothChallengeCreated, setThisMothChallengeCreated] =
    useState(false);

  useEffect(() => {
    if (!user || (user && user?.userType !== "admin")) {
      router.push("/admin-login");
      setUser(null);
    }
  }, [user]);

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

  return (
    <>
      <div className={styles.admin}>
        <Loader spinning={isLoading}>
          <h3 className={styles.admin__title}>Admin Dashboard</h3>

          {/* Create Challenge */}
          {!thisMothChallengeCreated && (
            <CreateChallenge setIsLoading={setIsLoading} />
          )}
        </Loader>
      </div>

      {/* Leaderboard */}
      <Leaderboard setAdminPageChallenges={setAdminPageChallenges} />
    </>
  );
};

export default Admin;
