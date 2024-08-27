import React from "react";
import Image from "next/image";
import meetings from "../public/images/meeting.jpg";
import styles from "../css/BannerSection.module.css";

type Props = {};

export default function BannerSection({}: Props) {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.imageContainer}>
        <Image
          src={meetings}
          alt="Business meeting"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className={styles.bannerImage}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Welcome to Jakhwal Advisors</h1>
        <p>Your trusted partner in financial success</p>
      </div>
    </section>
  );
}
