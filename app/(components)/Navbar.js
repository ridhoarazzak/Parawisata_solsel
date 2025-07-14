'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { dictionary } from '../lib/dictionary';
import LanguageSwitcher from './LanguageSwitcher'; // Import switcher

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  const text = dictionary[language];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Solok<span className="text-teal-500">Selatan</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <Link href="/" className="hover:text-teal-500 transition-colors">{text.home}</Link>
          <Link href="/destinasi" className="hover:text-teal-500 transition-colors">{text.destinations}</Link>
          <Link href="/kontak" className="hover:text-teal-500 transition-colors">{text.contact}</Link>
        </div>
        {/* TAMBAHKAN TOMBOL BAHASA DI SINI */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
