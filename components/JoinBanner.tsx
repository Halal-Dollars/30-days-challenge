import React from "react";
import styles from "../styles/All.module.scss";

const JoinBanner: React.FC = () => {

  return (
    <nav className={styles.join_banner}>
      <p className={styles.join_banner__subtitle}>
        New to Halal Dollars $500 in 30 Days Challenge?
      </p>
      <h4 className={styles.join_banner__title}>
        Join the Community to Get Started
      </h4>
      <h4 className={styles.join_banner__desc}>
        Join Halal Dollars Community on WhatsApp
      </h4>
      <button className={styles.join_banner__button}>
        Join Halal Dollars Community
      </button>
    </nav>
  );
};

export default JoinBanner;
