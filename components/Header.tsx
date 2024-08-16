import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/All.module.scss";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.header}>
      <h3 className={styles.header__title} onClick={() => router.push("/")}>
        Halal Dollars
      </h3>

      <div className="flex gap-6">
        <Link href="/" className="text-[14px]">Leaderboard</Link>
        <Link href="/register" className="text-[14px]">Register</Link>
        <Link href="/submit-task" className="text-[14px]">Submit Task</Link>
      </div>
    </nav>
  );
};

export default Header;
