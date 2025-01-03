import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarXS } from "./Components/Navbar/NavbarXS.component";
import { NavbarLG } from "./Components/Navbar/NavbarLG.component";
import { FooterXs } from "./Components/Footer/FooterXs.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaasDesk",
  description: "All in one HR software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="md:hidden xs:block">
          <NavbarXS />
        </div>

        <div className="lg:block xs:hidden">
          <NavbarLG />
        </div>

        {children}

        <div className="md:hidden xs:block">
          <FooterXs />
        </div>
        <div className="lg:block xs:hidden"></div>
      </body>
    </html>
  );
}
