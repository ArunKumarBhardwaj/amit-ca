import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../../css/modules/Testimonials.module.css";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Tech Corp",
    content:
      "Asterism Advisory LLP provided exceptional service. Their expertise in financial planning has been invaluable to our company's growth.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CFO, StartUp Inc",
    content:
      "The team at Asterism Advisory LLP is professional, knowledgeable, and always available. They've helped us navigate complex financial challenges with ease.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Owner, Local Business",
    content:
      "I'm extremely satisfied with the personalized attention and expert advice I've received from Asterism Advisory LLP. They truly care about their clients' success.",
  },
];

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.testimonialSection} id="section4">
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {testimonials.map((testimonial: Testimonial) => (
              <div className={styles.embla__slide} key={testimonial.id}>
                <div className={styles.testimonialCard}>
                  <p className={styles.testimonialContent}>
                    "{testimonial.content}"
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <p className={styles.authorName}>{testimonial.name}</p>
                    <p className={styles.authorPosition}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`${styles.embla__button} ${styles["embla__button--prev"]}`}
          onClick={() => emblaApi && emblaApi.scrollPrev()}
        >
          &lt;
        </button>
        <button
          className={`${styles.embla__button} ${styles["embla__button--next"]}`}
          onClick={() => emblaApi && emblaApi.scrollNext()}
        >
          &gt;
        </button>
      </div>
      <div className={styles.embla__dots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.embla__dot} ${
              index === selectedIndex ? styles["embla__dot--selected"] : ""
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
