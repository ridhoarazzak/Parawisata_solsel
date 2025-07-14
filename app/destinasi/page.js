'use client';

import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { dictionary, destinationsList } from '../lib/dictionary';

export default function DestinasiPage() {
  const { language } = useContext(LanguageContext);
  const text = dictionary[language];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">{text.allDestinationsTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinationsList.map((dest) => (
          <div key={dest.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${dest.image})` }}></div>
            <div className="p-6">
              <h3 className="font-bold text-2xl mb-2 text-gray-800">{dest.name}</h3>
              {/* Mengambil deskripsi dari kamus berdasarkan id */}
              <p className="text-gray-600">{text[`desc_${dest.id}`]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
