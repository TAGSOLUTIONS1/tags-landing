import { Inter } from 'next/font/google';
import IndustriesServe from '@/components/shared/IndustriesServe';
import IndustriesServeCards from '@/components/shared/IndustriesServeCards';

const inter = Inter({ subsets: ['latin'] });

export default function IndustryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={inter.className}>
      <div className="bg-gray-100">
        <IndustriesServe />
        <IndustriesServeCards></IndustriesServeCards>
      </div>
      {children}
    </main>
  );
}
