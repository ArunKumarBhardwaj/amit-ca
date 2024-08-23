// components/WhoWeAre.js
import Image from "next/image";
import styles from "../css/WhoWeAre.module.css";
import meetings from "../public/images/meeting.jpg";

const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAre}>
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>Who We Are</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>
            JAKHWAL ADVISORS, a Chartered Accountancy firm was formed in the
            year 2021.
          </h3>
          <p className={styles.paragraph}>
            We have assisted clients in establishing new business ventures, and
            guided them on various initial compliances and entity formation
            procedures. At <strong> JAKHWAL ADVISORS</strong>, clients are
            provided with excellent services with a complete dedication and
            transparent approach.
          </p>
          <p className={styles.paragraph}>
            Major areas of services include{" "}
            <strong>
              start-up advisory, devising strategy for business restructuring,
              regulatory approvals, periodic compliance under income tax law,
              GST law, company law, EPF & ESIC law, drafting and registration of
              agreements with various statutory authorities, due diligence and
              representation before authorities.
            </strong>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={meetings} // Replace with the actual image path
            alt="Profile of the CA"
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
