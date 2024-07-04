import Banner from '@/components/atoms/Banner';
import Footer from "@/components/atoms/Footer";
import Header from "@/components/atoms/Header";
import config from '@/config/config.json';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './page.module.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.company.name,
  description: config.company.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content={metadata.description as string} />
        <meta name="description" content={config.company.motto as string} />
      </head>
      <body className={inter.className}>
        <Banner />
        <Header />
        <main className={styles.mainContainer}>
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
