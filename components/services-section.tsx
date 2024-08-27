import React from "react";
import styles from "../css/Services.module.css";

const servicesList = [
  {
    title: "Audit & Assurance",
    description:
      "Comprehensive auditing services to ensure financial accuracy and compliance with regulations.",
    icon: "📊",
  },
  {
    title: "Tax Planning & Compliance",
    description:
      "Strategic tax planning and timely compliance with tax laws to optimize your financial position.",
    icon: "💼",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Meticulous accounting and bookkeeping services to maintain accurate and up-to-date financial records.",
    icon: "📚",
  },
  {
    title: "Business Advisory",
    description:
      "Expert business advice to help your company grow, overcome challenges, and achieve long-term success.",
    icon: "🚀",
  },
  {
    title: "Corporate Finance",
    description:
      "Tailored financial strategies and solutions for corporate growth, restructuring, and optimization.",
    icon: "💹",
  },
  {
    title: "Forensic Accounting",
    description:
      "Investigative accounting services to uncover financial discrepancies, fraud, and provide expert testimony.",
    icon: "🔍",
  },
  {
    title: "Risk Management",
    description:
      "Comprehensive risk assessment and mitigation strategies to protect your business interests and assets.",
    icon: "🛡️",
  },
  {
    title: "International Tax Services",
    description:
      "Navigate complex international tax laws and regulations with expert guidance for global operations.",
    icon: "🌐",
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection} id="section2">
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {servicesList.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
