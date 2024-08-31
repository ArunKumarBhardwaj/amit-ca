import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import styles from "../css/Navbar.module.css";

const navigationRoutes = [
  "Who We Are",
  "Services",
  "Why Us",
  "Testimonials",
  "Contact",
] as const;

const HeaderSection: React.FC = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarAreaEl = useRef<HTMLDivElement>(null);

  const updateNavbar = useCallback(() => {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.scrollY > navbarAreaEl.current.offsetTop);
    }

    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });

    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      currentSection = sections[sections.length - 1].id;
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateNavbar);
    window.addEventListener("resize", updateNavbar);

    updateNavbar();

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
    };
  }, [updateNavbar]);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 65,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      ref={navbarAreaEl}
      className={`${styles.navbar} ${isNavbarSticky ? styles.sticky : ""}`}
    >
      <div className={styles.logo}>
        <Link href="/">
          <p className={styles.companyName}>Jakhwal Advisors LLP</p>
          <div className={styles.lineBreaker} />
          <p className={styles.charteredText}>Consultancy Firm</p>
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.showMobileMenu : ""
        }`}
      >
        {navigationRoutes.map((item, index) => (
          <li
            key={item}
            className={
              activeSection === `section${index + 1}` ? styles.active : ""
            }
          >
            <Link
              href={`/#section${index + 1}`}
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(`section${index + 1}`);
              }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderSection;
