import { Link } from "react-router-dom";

// Tambahkan logo media partner di sini. Simpan file logo di /public (mis. /public/partners/nama-media.png)
// lalu isi array ini. Kolom "url" opsional — isi jika ingin logo bisa diklik menuju halaman media tersebut.
const MEDIA_PARTNERS = [
  { name: "Media Partner", logo: "/partners/media-partner-1.png", url: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Logo Desa Siallagan Pindaraya" className="w-11 h-11" />
              <div className="font-serif font-bold text-teal-400">
                <span className="block text-xl leading-none">Siallagan</span>
                <span className="block text-sm font-normal italic text-teal-300">
                  Pindaraya
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desa Siallagan Pindaraya, Kecamatan Simanindo, Kabupaten Samosir,
              Sumatera Utara. Menyimpan sejarah dan budaya Batak di tepi Danau
              Toba.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jelajahi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tentang-kami/profil-desa"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang-kami/struktur-pengelola"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Struktur Pengelola
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang-kami/potensi-desa"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Potensi Desa
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang-kami/nilai-desa"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Nilai & Semangat Desa
                </Link>
              </li>
              <li>
                <Link
                  to="/umkm-ekonomi"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  UMKM & Ekonomi Desa
                </Link>
              </li>
              <li>
                <Link
                  to="/wisata-budaya"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Wisata & Budaya Desa
                </Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Artikel Desa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Desa Siallagan Pindaraya</li>
              <li>Kec. Simanindo, Kab. Samosir</li>
              <li>Sumatera Utara, Indonesia</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Media Partner */}
        {MEDIA_PARTNERS.length > 0 && (
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-5">
              Supported by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {MEDIA_PARTNERS.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url || "#"}
                  target={partner.url && partner.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Desa Siallagan Pindaraya. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;