import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const contactInfo = {
  phone: '+62 812 3456 7890',
  email: 'info.solsel@tourism.com',
  socials: [
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/pariwisata.solsel' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/6281234567890' },
  ],
};

export default function KontakPage() {
  return (
    <div className="bg-gray-50 min-h-[70vh]">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Untuk informasi lebih lanjut mengenai pariwisata di Solok Selatan, jangan ragu untuk menghubungi kami melalui kanal di bawah ini.
        </p>

        <div className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-teal-500" />
            <a href={`mailto:${contactInfo.email}`} className="text-lg text-gray-700 hover:text-teal-600">
              {contactInfo.email}
            </a>
          </div>

          {/* Telepon / WhatsApp */}
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-2xl text-teal-500" />
            <a href={contactInfo.socials.find(s => s.name === 'WhatsApp').url} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-teal-600">
              {contactInfo.phone}
            </a>
          </div>
          
          {/* Instagram */}
          <div className="flex items-center space-x-4">
            <FaInstagram className="text-2xl text-teal-500" />
            <a href={contactInfo.socials.find(s => s.name === 'Instagram').url} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-teal-600">
              @pariwisata.solsel
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
