import React, { useState, useEffect } from "react";
import styles from "../css/Testimonial.module.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Tech Corp",
    content:
      "Jakhwal Advisors provided exceptional service. Their expertise in financial planning has been invaluable to our company growth.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CFO, StartUp Inc",
    content:
      "The team at Jakhwal Advisors is professional, knowledgeable, and always available. They have helped us navigate complex financial challenges with ease.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Owner, Local Business",
    content:
      "I am extremely satisfied with the personalized attention and expert advice I have received from Jakhwal Advisors. They truly care about their clients success.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.testimonialSection} id="section4">
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <div className={styles.sliderContainer}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className={styles.testimonialCard}>
          <p className={styles.testimonialContent}>
            "{testimonials[currentIndex].content}"
          </p>
          <div className={styles.testimonialAuthor}>
            <p className={styles.authorName}>
              {testimonials[currentIndex].name}
            </p>
            <p className={styles.authorPosition}>
              {testimonials[currentIndex].position}
            </p>
          </div>
        </div>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
