import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'HomeOS - Life Operating System',
  description: 'The command center for your life. Manage your home, family, finances, and goals in one elegant place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0B0B0C] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
