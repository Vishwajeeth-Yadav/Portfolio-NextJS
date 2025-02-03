import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vishwajeeth Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full bg-background/80 backdrop-blur-sm border-b border-primary/25 z-50">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="font-bold text-xl text-primary glow-text">V.Y</Link>
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Home size={20} />
                  <span className="hidden sm:inline">Home</span>
                </Link>
                <Link href="/about" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <User size={20} />
                  <span className="hidden sm:inline">About</span>
                </Link>
                <Link href="/projects" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FolderGit2 size={20} />
                  <span className="hidden sm:inline">Projects</span>
                </Link>
                <Link href="/contact" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={20} />
                  <span className="hidden sm:inline">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}