import { Plus_Jakarta_Sans, Geist } from 'next/font/google'; 
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '800'], 
  variable: '--font-plus-jakarta', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}> 
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Ab main tag poori width cover karega bina background break kiye */}
        <main className="grow w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}