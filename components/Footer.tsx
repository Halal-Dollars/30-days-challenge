import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/All.module.scss";

const Footer: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <nav className={styles.footer}>
      <p className={styles.footer__subtitle}>Training Videos</p>
      <h4 className={styles.footer__title}>Access the Training Videos</h4>
      <h4 className={styles.footer__desc}>
        Go through the training videos whenever you need them
      </h4>
      <Link
        href="https://halaldollars.ng/training-videos"
        target="_blank"
        className={styles.footer__button}
      >
        Watch training Videos
      </Link>
    </nav>
  );
};

export default Footer;
