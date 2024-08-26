"use client";

import HeaderSection from "@/components/header-section";
import BannerSection from "@/components/banner-section";
import WhoWeAre from "@/components/who-we-are-section";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <BannerSection />
      <WhoWeAre />
      <section id="section2" style={{ height: "100vh" }}>
        <h1>Services</h1>
      </section>
      <section id="section3" style={{ height: "100vh" }}>
        <h1>Why Us</h1>
      </section>
      <section id="section4" style={{ height: "100vh" }}>
        <h1>Testimonial</h1>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
}
