import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Banner from '@/components/Banner';
import Footer from "@/components/Footer";
import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D-Fine Construction",
  description: "Website of D-Fine Construction Company",
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
      </head>
      <body className={inter.className}>
        <Header />
        <main className={styles.mainContainer}>
          <Banner />
          <section>
            {children}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
