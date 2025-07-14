'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';
import { dictionary } from './lib/dictionary';

export default function HomePage() {
  const { language } = useContext(LanguageContext);
  const text = dictionary[language];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: "url('/images/seribu-rumah-gadang.jpg')" }}
      >
        <div className="bg-black/50 p-8 rounded-lg text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{text.heroTitle}</h1>
          <p className="text-lg md:text-xl mb-6">{text.heroSubtitle}</p>
          <Link href="/destinasi" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            {text.heroButton}
          </Link>
        </div>
      </section>
      {/* ... sisa halaman ... */}
    </div>
  );
        }
