import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const raleway = Raleway({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Libenson",
  description: "Libenson's Profolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased bg-zinc-100 `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
