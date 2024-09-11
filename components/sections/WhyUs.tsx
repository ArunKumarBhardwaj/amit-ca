import React from "react";
import styles from "../../css/modules/WhyUs.module.css";

const WhyUs: React.FC = () => {
  return (
    <section className={styles.whyUs} id="section3">
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Asterism Advisory LLP?</h2>
        <div className={styles.underline}></div>
        <p className={styles.description}>
          At Asterism Advisory LLP, we bring unparalleled expertise in Virtual
          CFO services directly to your business. Our team combines decades of
          financial acumen with cutting-edge technology to deliver strategic
          insights tailored to your industry. We offer the expertise of a
          full-time CFO without the associated costs, providing scalable
          solutions that grow with your business. From ensuring regulatory
          compliance to offering objective financial guidance, we're committed
          to elevating your financial strategy and driving your business towards
          sustainable growth and success.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
