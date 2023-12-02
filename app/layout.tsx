import type { Metadata } from 'next';

import { Source_Code_Pro } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Providers } from '../lib/StoreProvider';
import BgElements from '@/components/bgElements.component';

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
      <body className={`${sourceCodePro.className} bg-white relative`}>
        <Providers>
          <Navbar />
          <BgElements />

          <main className="px-10 max-w-7xl mx-auto">{children}</main>
        </Providers>
        {/* <Navbar /> */}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
