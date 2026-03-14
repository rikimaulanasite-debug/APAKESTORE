import type {Metadata} from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space' 
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

export const metadata: Metadata = {
  title: 'APAKESTORE - Premium Cheats',
  description: 'Premium Cheats & Mods Store',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-inter bg-[#C4A1FF] text-black selection:bg-black selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
