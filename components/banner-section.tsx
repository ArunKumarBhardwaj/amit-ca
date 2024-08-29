import React from "react";
import Image from "next/image";
import styles from "../css/BannerSection.module.css";
import meetings from "../public/images/meeting.jpg";

export default function BannerSection() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.imageContainer}>
        <Image
          src={meetings}
          alt="Business meeting"
          fill={true}
          className={styles.bannerImage}
          priority
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Welcome to Jakhwal Advisors</h1>
        <p className={styles.subtitle}>Your Trusted Financial Partners</p>
      </div>
    </section>
  );
}
