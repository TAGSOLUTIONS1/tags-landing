import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import About from '@/components/shared/About';
import Navbar from '@/components/shared/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TAGS | IT-SOLUTIONS',
  description: 'Providing top IT solutions for your business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/tagslogo.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <About id="about-us" />
      </body>
    </html>
  );
}
