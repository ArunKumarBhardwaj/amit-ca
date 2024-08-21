import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../css/Navbar.module.css";

export default function HeaderSection() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const navbarAreaEl = useRef<any>(null);

  function fixNavBar() {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.scrollY > navbarAreaEl.current.offsetTop);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", fixNavBar);

    return () => {
      window.removeEventListener("scroll", fixNavBar);
    };
  }, []);

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 65, // Adjust offset for sticky navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={navbarAreaEl}
      className={`${styles.navbar} ${isNavbarSticky ? styles.sticky : ""}`}
    >
      <div className={styles.logo}>
        <>
          <Link href="/">Jakhwal Advisors</Link>
          <div className={styles.lineBreaker} />
          <p className={styles.charteredText}>CHARTERED ACCOUNTANTS</p>
        </>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a onClick={() => scrollToSection("section1")}>Who We Are</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("section2")}>Services</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("section3")}>Why Us</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("section4")}>Testimonials</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("section5")}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
