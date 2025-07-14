const destinations = [
  { name: 'Seribu Rumah Gadang', description: 'Kawasan perkampungan adat Minangkabau dengan ratusan rumah gadang otentik.', image: '/images/seribu-rumah-gadang.jpg' },
  { name: 'Goa Batu Kapal', description: 'Gua eksotis dengan ornamen bebatuan alami yang menyerupai kapal.', image: '/images/goa-batu-kapal.jpg' },
  { name: 'Air Terjun Tansi 3 & 4', description: 'Dua air terjun menawan di tengah sejuknya alam perkebunan teh.', image: '/images/air-terjun-tansi.jpg' },
  { name: 'Hot Water Boom Sapan Maluluang', description: 'Taman rekreasi air panas modern untuk keseruan bersama keluarga.', image: '/images/hot-water-boom.jpg' },
  { name: 'Pemandian Air Panas Balun', description: 'Pemandian air panas alami yang dipercaya memiliki khasiat untuk kesehatan.', image: '/images/air-panas-balun.jpg' },
  { name: 'Rafting Batang Hari', description: 'Pacu adrenalin dengan mengarungi jeram seru di Sungai Batang Hari.', image: '/images/rafting.jpg' },
];

export default function DestinasiPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Semua Destinasi Wisata</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${dest.image})` }}></div>
            <div className="p-6">
              <h3 className="font-bold text-2xl mb-2 text-gray-800">{dest.name}</h3>
              <p className="text-gray-600">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
