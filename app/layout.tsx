import type { Metadata } from 'next';

import { Source_Code_Pro } from 'next/font/google';

import './globals.css';
import { Providers } from '../lib/StoreProvider';
import Navbar from '@/components/navbar';
import Bg from '@/components/bg';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Ostap Klysa Frontend Developer',
  description: 'Welcome to my perssonal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${sourceCodePro.className} bg-white relative`}>
          <Navbar />
          <Bg />

          <main className="px-10 mx-auto container h-[calc(100vh-148px)]">
            <h1 hidden>Ostap Klysa Frontend Developer</h1>
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
