import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Solok<span className="text-teal-500">Selatan</span>
        </Link>
        <div className="space-x-6 text-gray-600 font-medium">
          <Link href="/" className="hover:text-teal-500 transition-colors">Home</Link>
          <Link href="/destinasi" className="hover:text-teal-500 transition-colors">Destinasi</Link>
          <Link href="/kontak" className="hover:text-teal-500 transition-colors">Kontak</Link>
        </div>
      </div>
    </nav>
  );
    }
