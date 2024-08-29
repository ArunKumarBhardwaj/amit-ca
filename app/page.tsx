"use client";

import HeaderSection from "@/components/header-section";
import BannerSection from "@/components/banner-section";
import WhoWeAre from "@/components/who-we-are-section";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Services from "@/components/services-section";
import Testimonial from "@/components/testimonial";
// import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <BannerSection />
      <WhoWeAre />
      <Services />
      {/* <WhyUs /> */}
      <section id="section3" style={{ height: "100vh" }}>
        <h1>Why Us</h1>
      </section>
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}
