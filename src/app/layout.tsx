import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luciano Leyria - Portfolio",
  description: "Luciano Leyria's portfolio - Web developer",
  keywords: 'Backend developer, frontend developer, fullstack developer, web developer, portfolio, luciano leyria'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link rel="icon" href="/svg/dev.svg" />
      </head>
      <body className={`${inter.className} bg-slate-100 dark:bg-slate-950`}>{children}</body>
    </html>
  );
}
