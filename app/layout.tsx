import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "../css/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Asterism Advisory LLP",
  description: "",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={`${poppins.className}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
