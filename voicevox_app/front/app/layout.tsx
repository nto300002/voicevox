import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'pomodoro voicevox',
  description: 'ずんだもんがポモドーロ法で学習をサポートしてくれるよ！',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>ずんだもんとポモドーロ！</title>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gray-50 relative bg-green-200 text-gray-600">
          <header className='bg-green w-hull p-4 text-3xl'>ずんだもんとポモドーロ！</header>
          <menu className="flex-1 container max-w-screen-md mx-auto px-5 py-5 bg-white">
            {children}
          </menu>
          <footer className="py-5">
            <div className="text-center text-sm">
              Copyright © All rights reserved | pomodoro_voicevox
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
