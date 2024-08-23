import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../css/Navbar.module.css";

export default function HeaderSection() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section
  const navbarAreaEl = useRef<any>(null);

  // Function to check if the navbar should be sticky
  function fixNavBar() {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.scrollY > navbarAreaEl.current.offsetTop);
    }
  }

  // Function to highlight the navbar link based on scroll position
  const highlightNavLink = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 65; // Adjust for sticky navbar height

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.clientHeight > scrollPosition
      ) {
        setActiveSection(section.id);
      }
    });
  };

  // Add scroll event listeners
  useEffect(() => {
    window.addEventListener("scroll", fixNavBar);
    window.addEventListener("scroll", highlightNavLink);

    return () => {
      window.removeEventListener("scroll", fixNavBar);
      window.removeEventListener("scroll", highlightNavLink);
    };
  }, []);

  // Function to scroll to a specific section
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
