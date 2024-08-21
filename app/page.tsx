"use client";

import HeaderSection from "@/components/header-section";
import Image from "next/image";
import meetings from "../public/images/meeting.jpg";

export default function Home() {
  return (
    <>
      <HeaderSection />
      {/* <div
        style={{
          width: "100%",
          height: "500px",
          overflow: "hidden",
          background: "red",
        }}
      >
        <Image
          src={meetings}
          alt="Logo"
          layout="fill"
          style={{
            maxWidth: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div> */}

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
