import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ARC - Google Ads Agency</title>
        <meta name="description" content="ARC is your partner for maximizing ROI with expert Google Ads management. Drive traffic, increase conversions, and grow your business with our tailored solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
        <meta property="og:title" content="ARC - Google Ads Agency" />
        <meta property="og:description" content="ARC is your partner for maximizing ROI with expert Google Ads management. Drive traffic, increase conversions, and grow your business with our tailored solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arc-ads.com" />
        <meta property="og:image" content="https://arc-ads.com/arc-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ARC - Google Ads Agency" />
        <meta name="twitter:description" content="ARC is your partner for maximizing ROI with expert Google Ads management. Drive traffic, increase conversions, and grow your business with our tailored solutions." />
        <meta name="twitter:image" content="https://arc-ads.com/arc-image.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
