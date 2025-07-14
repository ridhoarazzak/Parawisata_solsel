import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './(components)/Navbar';
import Footer from './(components)/Footer';
// IMPORT BARU
import { LanguageProvider } from './context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wisata Solok Selatan',
  description: 'Jelajahi keindahan tersembunyi di Solok Selatan, Sumatera Barat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* WRAP DENGAN LANGUAGE PROVIDER */}
      <LanguageProvider>
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
