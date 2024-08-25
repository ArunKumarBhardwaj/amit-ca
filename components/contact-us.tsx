import dynamic from "next/dynamic";
import styles from "../css/ContactUs.module.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Map = dynamic(() => import("../components/map/map"), {
  loading: () => <p>Loading map...</p>,
  ssr: false,
});

const ContactUs = () => {
  return (
    <section className={styles.contactContainer} id="section5">
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.contactInfo}>
          <div className={styles.infoColumn}>
            <div className={styles.infoGroup}>
              <h2>Address</h2>
              <p>210, Neelkanth Complex,</p>
              <p>Rajpur Road,</p>
              <p>Dehradun-248001</p>
            </div>
            <div className={styles.infoGroup}>
              <h2>Email</h2>
              <p>
                <a href="mailto:info@yourcompany.com">
                  caamitjakhwalddn@gmail.com
                </a>
              </p>
            </div>
            <div className={styles.infoGroup}>
              <h2>Call Us</h2>
              <p>
                <a href="tel:+1234567890">+91 8800675113</a>
              </p>
            </div>
          </div>
          <div className={styles.mapColumn}>
            <Map />
          </div>
        </div>
        <div className={styles.socialLinks}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} color="#fff" />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} color="#fff" />
            </a>
            <a
              href="https://www.instagram.com/jakhwal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} color="#fff" />
            </a>
            <a
              href="https://www.linkedin.com/company/jakhwaladvisors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
