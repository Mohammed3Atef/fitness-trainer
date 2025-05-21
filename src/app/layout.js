import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coach Anas Omran | Personal Fitness Trainer",
  description: "Get Fit with Coach Anas Omran. Personalized gym training to transform your life. Certified personal trainer, 10+ years experience, strength & conditioning expert.",
};

// Import the new DarkModeToggle component
import DarkModeToggle from "./DarkModeToggle";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeToggle />
        <div id="__next-darkmode-container__">
          {children}
        </div>
      </body>
    </html>
  );
}
