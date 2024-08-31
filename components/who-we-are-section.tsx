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
            <strong>JAKHWAL ADVISORS</strong>, a leading financial consultancy
            firm specializing in Virtual CFO Services, was established in 2022.
          </p>
          <p className={styles.paragraph}>
            We have empowered numerous businesses by providing strategic
            financial leadership and guidance. Our expertise lies in helping
            companies optimize their financial operations without the overhead
            of a full-time CFO. At <strong>JAKHWAL ADVISORS</strong>, we pride
            ourselves on delivering exceptional Virtual CFO services with
            unwavering dedication and a transparent approach.
          </p>
          <p className={styles.paragraph}>
            Our core services include{" "}
            <strong>
              financial strategy development, cash flow management, budgeting
              and forecasting, financial risk assessment, performance analysis,
              capital raising support, and strategic decision-making guidance.
              We also assist in regulatory compliance, financial reporting, and
              implementing robust financial systems and processes.
            </strong>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={meetings}
            alt="JAKHWAL ADVISORS team in action"
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
