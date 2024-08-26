import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../css/Navbar.module.css";

export default function HeaderSection() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navbarAreaEl = useRef<any>(null);

  function fixNavBar() {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.scrollY > navbarAreaEl.current.offsetTop);
    }
  }

  const highlightNavLink = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Use middle of viewport

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });

    // Special case for last section (Contact Us)
    const lastSection = sections[sections.length - 1];
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      currentSection = lastSection.id;
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNavBar);
    window.addEventListener("scroll", highlightNavLink);

    // Initial highlight
    highlightNavLink();

    return () => {
      window.removeEventListener("scroll", fixNavBar);
      window.removeEventListener("scroll", highlightNavLink);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 65,
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
        <Link href="/">
          <p>Jakhwal Advisors</p>
          <div className={styles.lineBreaker} />
          <p className={styles.charteredText}>CHARTERED ACCOUNTANTS</p>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li className={activeSection === "section1" ? styles.active : ""}>
          <a onClick={() => scrollToSection("section1")}>Who We Are</a>
        </li>
        <li className={activeSection === "section2" ? styles.active : ""}>
          <a onClick={() => scrollToSection("section2")}>Services</a>
        </li>
        <li className={activeSection === "section3" ? styles.active : ""}>
          <a onClick={() => scrollToSection("section3")}>Why Us</a>
        </li>
        <li className={activeSection === "section4" ? styles.active : ""}>
          <a onClick={() => scrollToSection("section4")}>Testimonials</a>
        </li>
        <li className={activeSection === "section5" ? styles.active : ""}>
          <a onClick={() => scrollToSection("section5")}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
