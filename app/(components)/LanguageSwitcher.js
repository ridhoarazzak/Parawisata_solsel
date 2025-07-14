'use client';

import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <div className="flex items-center bg-gray-200 rounded-full p-1">
      <button
        onClick={() => switchLanguage('id')}
        className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${language === 'id' ? 'bg-white text-teal-600 shadow' : 'text-gray-600'}`}
      >
        ID
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${language === 'en' ? 'bg-white text-teal-600 shadow' : 'text-gray-600'}`}
      >
        EN
      </button>
    </div>
  );
}
