import React from "react";
import styles from "../../css/modules/WhyUs.module.css";

const WhyUs: React.FC = () => {
  const reasons = [
    "Expertise in Financial Strategy: Our team of seasoned professionals brings decades of combined experience in financial management and strategic planning.",
    "Cost-Effective Solution: Get C-suite expertise without the full-time executive costs, perfect for growing businesses.",
    "Customized Approach: We tailor our services to your specific industry and business needs, ensuring relevant and impactful financial guidance.",
    "Cutting-Edge Technology: Leverage our advanced financial tools and software for real-time insights and efficient financial management.",
    "Scalable Services: Our flexible solutions grow with your business, adapting to your changing financial needs.",
    "Compliance Assurance: Stay ahead of regulatory requirements with our up-to-date knowledge of financial regulations and compliance standards.",
    "Objective Perspective: Benefit from an external, unbiased viewpoint on your financial strategies and decisions.",
  ];

  return (
    <section className={styles.whyUs} id="section3">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Why Choose Jakhwal Advisors LLP as Your Virtual CFO?
        </h2>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <span className={styles.checkIcon}>✓</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>
            Partner with Jakhwal Advisors LLP and elevate your financial
            strategy to new heights.
          </p>
          <button className={styles.ctaButton}>Schedule a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
