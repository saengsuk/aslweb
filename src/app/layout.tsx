import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import Prompt font with multiple weights for Thai and English
const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASL - Assumption Convent Lam Narai",
  description: "Official website of Assumption Convent Lam Narai School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${prompt.variable} font-prompt antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
