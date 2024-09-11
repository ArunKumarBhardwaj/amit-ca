import React from "react";
import Image from "next/image";
import styles from "../../css/modules/Banner.module.css";
import meetings from "../../public/images/meeting.jpg";

export default function Banner() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.imageContainer}>
        <Image
          src={meetings}
          alt="Strategic financial planning session"
          fill={true}
          className={styles.bannerImage}
          priority
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Elevate Your Financial Strategy</h1>
        <p className={styles.subtitle}>
          Virtual CFO Services by Asterism Advisory LLP
        </p>
        <p className={styles.tagline}>
          Expert Financial Leadership for Your Business Growth
        </p>
      </div>
    </section>
  );
}
