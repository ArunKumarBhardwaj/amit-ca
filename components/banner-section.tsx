import React from "react";
import Image from "next/image";
import meetings from "../public/images/meeting.jpg";

type Props = {};

export default function BannerSection({}: Props) {
  return (
    <section>
      <div style={{ width: "100%", height: "650px" }}>
        <Image
          src={meetings}
          alt="Logo"
          style={{
            filter: "blur(4px)",
            // opacity: 0.3,
            maxWidth: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}
