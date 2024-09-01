"use client";

import NavBar from "@/components/layout/Navbar";
import Banner from "@/components/sections/Banner";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <WhoWeAre />
      <Services />
      <WhyUs />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
