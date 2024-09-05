import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/All.module.scss";
import { useUserStore } from "../store/user";

const Header: React.FC = () => {
  const router = useRouter();

  const user = useUserStore((state) => state.user);

  return (
    <nav className={styles.header}>
      <h3 className={styles.header__title} onClick={() => router.push("/")}>
        Halal Dollars
      </h3>

      <div className="flex flex-wrap gap-y-1 gap-x-3.5">
        <Link href="/" className="text-[14px]">
          Leaderboard
        </Link>
        <Link href="/submit-task" className="text-[14px]">
          Submit Task
        </Link>
        {user ? (
          <Link href="/dashboard" className="text-[14px]">
            Dashboard
          </Link>
        ) : (
          <Link href="/register" className="text-[14px]">
            Register
          </Link>
        )}
        {!user && (
          <Link href="/login" className="text-[14px]">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
