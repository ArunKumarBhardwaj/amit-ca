import React from "react";
import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.companyName}>
            <span>Jakhwal Advisors LLP</span>
          </div>
          <div className={styles.copyright}>
            All rights reserved © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
