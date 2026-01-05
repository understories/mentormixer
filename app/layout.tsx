import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Mentorship Matching Mixer",
  description: "We all have something to teach and something to learn.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nunito.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}

