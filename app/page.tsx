"use client";

import HeaderSection from "@/components/header-section";
import BannerSection from "@/components/banner-section";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <BannerSection />
      <section id="section1" style={{ height: "100vh" }}>
        <h1>Who We Are</h1>
      </section>
      <section id="section2" style={{ height: "100vh" }}>
        <h1>Services</h1>
      </section>
      <section id="section3" style={{ height: "100vh" }}>
        <h1>Why Us</h1>
      </section>
      <section id="section4" style={{ height: "100vh" }}>
        <h1>Testimonial</h1>
      </section>
      <section id="section5" style={{ height: "100vh" }}>
        <h1>Contact Section</h1>
      </section>
    </>
  );
}
