import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: "url('/images/seribu-rumah-gadang.jpg')" }} // Anda perlu menyiapkan gambar ini
      >
        <div className="bg-black/50 p-8 rounded-lg text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Jelajahi Surga Tersembunyi</h1>
          <p className="text-lg md:text-xl mb-6">Temukan keindahan alam dan budaya asli Solok Selatan.</p>
          <Link href="/destinasi" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Lihat Destinasi
          </Link>
        </div>
      </section>

      {/* Preview Destinasi */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Destinasi Populer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contoh Kartu Preview */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/goa-batu-kapal.jpg')" }}></div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Goa Batu Kapal</h3>
              <p className="text-gray-600">Keajaiban geologi dengan stalaktit dan stalagmit yang memukau.</p>
            </div>
          </div>
          {/* Tambahkan preview lain di sini */}
        </div>
      </section>
    </div>
  );
}
