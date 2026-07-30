import AboutHero from "@/components/AboutHero";
import StoryBehind from "@/components/StoryBehind";
import { MapPin, ShieldCheck, Users, Palette, Landmark, ExternalLink, ShoppingCart } from "lucide-react";

const HERO = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ohiicajnq/batak-handicrafts-display.png";
const ULOS_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4oezycajmq/ulos-weaving-craftsman.png";
const CARVING_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ofiicajnq/batak-wood-carving-statue.png";
const TOURISM_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ohvacajjq/village-tourism-experience.png";
const TAS_RAJUT_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ohvacajjq/tas-rajut-batak.png"; // Placeholder for Tas Rajut image

const UMKM_PRODUCTS = [
  {
    img: ULOS_IMG,
    title: "Kain Ulos",
    desc: "Kain tenun tradisional Batak dengan motif Sadum yang dibuat dengan teknik turun-temurun. Cocok untuk acara adat dan koleksi.",
    price: "Rp 350.000",
    tokopediaLink: "https://www.tokopedia.com/search?q=kain+ulos+batak",
  },
  {
    img: CARVING_IMG,
    title: "Pahatan Patung Batak",
    desc: "Kerajinan pahatan kayu khas Batak yang menggambarkan figur-figur adat dan simbol budaya dengan detail yang sangat halus.",
    price: "Rp 500.000",
    tokopediaLink: "https://www.tokopedia.com/search?q=patung+batak+kayu",
  },
  {
    img: HERO,
    title: "Souvenir Kerajinan Tangan",
    desc: "Berbagai produk kerajinan tangan dari bahan lokal seperti kayu dan serat alam, diolah menjadi souvenir bernilai jual tinggi.",
    price: "Rp 75.000",
    tokopediaLink: "https://www.tokopedia.com/search?q=souvenir+batak",
  },
  {
    img: ULOS_IMG,
    title: "Ulos Ragi Hotang",
    desc: "Ulos dengan motif Ragi Hotang yang melambangkan kebersamaan dan persatuan. Sering digunakan dalam upacara pernikahan Batak.",
    price: "Rp 450.000",
    tokopediaLink: "https://www.tokopedia.com/search?q=ulos+ragi+hotang",
  },
  {
    img: CARVING_IMG,
    title: "Miniatur Rumah Bolon",
    desc: "Replika miniatur rumah adat Batak (Rumah Bolon) yang dibuat dari kayu pilihan dengan detail arsitektur yang akurat.",
    price: "Rp 250.000",
    tokopediaLink: "https://www.tokopedia.com/search?q=miniatur+rumah+batak",
  },
  {
    img: TAS_RAJUT_IMG,
    title: "Tas Rajut",
    desc: "Tas anyaman dari daun pandan yang ditenun secara manual oleh pengrajin desa. Kuat, tahan lama, dan ramah lingkungan.",
    price: "Rp 130.000",
    tokopediaLink: "https://www.tokopedia.com/search?q=tas+rajut+batak",
  },
];

const FEATURES = [
  {
    icon: Palette,
    title: "Keterampilan Turun-Temurun",
    text: "Teknik menenun ulos dan memahat patung diwariskan dari generasi ke generasi.",
  },
  {
    icon: ShieldCheck,
    title: "Kualitas Handmade",
    text: "Setiap produk dikerjakan secara manual dengan ketelitian tinggi.",
  },
  {
    icon: Users,
    title: "Pemberdayaan Warga",
    text: "UMKM desa melibatkan banyak warga sebagai penggerak ekonomi lokal.",
  },
  {
    icon: MapPin,
    title: "Bahan Baku Lokal",
    text: "Pelaku UMKM mengolah bahan baku yang tersedia langsung di sekitar desa.",
  },
];

export default function UmkmEkonomi() {
  return (
    <>
      <AboutHero
        image={HERO}
        title={
          <>
            UMKM & Ekonomi
            <br />
            Desa Kami
          </>
        }
        subtitle="Menggerakkan ekonomi lokal lewat kerajinan tangan, kain ulos, dan pahatan patung khas Batak."
      />

      {/* UMKM Products Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="inline-block px-5 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4">
              <ShoppingCart className="inline w-4 h-4 mr-1" /> UMKM Unggulan Desa
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
              Produk Kerajinan Khas Desa Siallagan
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-3xl mx-auto">
              UMKM di Desa Siallagan Pindaraya tumbuh dari keterampilan dan
              kreativitas warga yang telah diwariskan turun-temurun. Produk tersedia di Tokopedia.
            </p>
          </div>

          {/* Product Cards with Price & Tokopedia Link */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {UMKM_PRODUCTS.map((product, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed mb-4 flex-1">
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                    <span className="text-xl font-bold text-teal-700">
                      {product.price}
                    </span>
                    <a
                      href={product.tokopediaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 2h3.5l.5 2h13.5a1 1 0 0 1 .97 1.24l-2 8A1 1 0 0 1 17.5 14H7.5a1 1 0 0 1-.97-.76L4.22 4H2V2zm5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                      </svg>
                      Beli di Tokopedia
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-14">
            Keunggulan UMKM Desa
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-teal-50 grid place-items-center mb-5">
                  <f.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism & Economy Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-5">
              <Landmark size={16} /> Pariwisata sebagai Penggerak Ekonomi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-5">
              Wisata Desa Mendorong Ekonomi Lokal
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Selain UMKM kerajinan, sektor pariwisata juga menjadi penggerak
              penting ekonomi desa. Kedatangan wisatawan membuka peluang bagi
              warga untuk menjual produk kerajinan dan menyediakan jasa homestay.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Sinergi antara UMKM dan pariwisata menciptakan ekosistem ekonomi
              yang saling mendukung.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={TOURISM_IMG}
              alt="Wisata desa mendorong ekonomi"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ULOS_IMG} alt="UMKM Desa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-teal-900/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-6 text-white">
          <div className="inline-block px-5 py-1.5 rounded-full bg-white/15 text-white font-medium text-sm mb-5 backdrop-blur">
            Bersama Membangun Ekonomi Desa
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dukung UMKM Desa Siallagan Pindaraya
          </h2>
          <p className="text-white/90 text-[15.5px] leading-relaxed mb-8">
            Setiap pembelian produk UMKM desa membantu meningkatkan kesejahteraan masyarakat dan melestarikan budaya Batak.
          </p>
          <a
            href="https://www.tokopedia.com/search?q=kerajinan+batak+samosir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300"
          >
            Kunjungi Toko Kami di Tokopedia
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <StoryBehind />
    </>
  );
}
