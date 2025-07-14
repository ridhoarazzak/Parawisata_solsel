'use client';

import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { dictionary } from '../lib/dictionary';

// ... (kode contactInfo tetap sama)
const contactInfo = {
  phone: '+62 812 3456 7890',
  email: 'info.solsel@tourism.com',
  socials: [
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/pariwisata.solsel' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/6281234567890' },
  ],
};

export default function KontakPage() {
  const { language } = useContext(LanguageContext);
  const text = dictionary[language];

  return (
    <div className="bg-gray-50 min-h-[70vh]">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{text.contactTitle}</h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          {text.contactSubtitle}
        </p>
        {/* ... sisa kode halaman kontak tetap sama ... */}
      </div>
    </div>
  );
}
