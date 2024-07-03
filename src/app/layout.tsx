import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/atoms/Header";
import Banner from '@/components/atoms/Banner';
import Footer from "@/components/atoms/Footer";
import styles from './page.module.css'
import config from '@/config/config.json'

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
      </body>
    </html>
  );
}
