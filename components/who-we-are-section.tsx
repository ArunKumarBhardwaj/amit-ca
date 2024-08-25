import Image from "next/image";
import styles from "../css/WhoWeAre.module.css";
import meetings from "../public/images/meeting.jpg";

const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAre} id="section1">
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>Who We Are</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>
            <b>JAKHWAL ADVISORS</b>, a Chartered Accountancy firm was formed in
            the year 2022.
          </p>
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
            src={meetings}
            alt="Profile of the CA"
            width={400}
            height={360}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
