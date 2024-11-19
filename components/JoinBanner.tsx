import React from "react";
import styles from "../styles/All.module.scss";
import Link from "next/link";

const JoinBanner: React.FC = () => {
  return (
    <nav className={styles.join_banner}>
      <p className={styles.join_banner__subtitle}>
        New to Halal Dollars (&#8358;)1M in 30 Days Challenge?
      </p>
      <h4 className={styles.join_banner__title}>
        Join the Community to Get Started
      </h4>
      <h4 className={styles.join_banner__desc}>
        Join Halal Dollars Community on WhatsApp
      </h4>
      <Link
        href="https://promo.halaldollars.online/hd-promo-step1"
        target="_blank"
        className={styles.join_banner__button}
      >
        Join Halal Dollars Community
      </Link>
    </nav>
  );
};

export default JoinBanner;
