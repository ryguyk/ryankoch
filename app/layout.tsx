import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from 'next/headers';
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Koch - Software Engineer",
  description: "A resume and portfolio for Ryan Koch, a full-stack software engineer with over 15 years of experience.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get('theme')?.value ?? 'light-blue';
  const themeName = cookieTheme.replace('-', ' ');

  return (
    <html lang="en" className={themeName}>   
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="mx-auto max-w-5xl">
          {children}
        </div>
      </body>
    </html>
  );
}
