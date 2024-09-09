import { Inter } from 'next/font/google';
import IndustriesServe from '@/components/shared/IndustriesServe';
import IndustriesServeCards from '@/components/shared/IndustriesServeCards';
import DiveDeeper from '@/components/shared/DiveDeeper';

const inter = Inter({ subsets: ['latin'] });

export default function IndustryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={inter.className}>
      <IndustriesServe />
      <IndustriesServeCards></IndustriesServeCards>
      <DiveDeeper></DiveDeeper>
      {children}
    </main>
  );
}
