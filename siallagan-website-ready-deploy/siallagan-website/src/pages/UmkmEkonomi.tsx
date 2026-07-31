import { useParams, useNavigate, Link } from "react-router-dom";
import AboutHero from "@/components/AboutHero";
import StoryBehind from "@/components/StoryBehind";
import UmkmCategorySlider from "@/components/UmkmCategorySlider";
import { umkmCategories, getCategoryById } from "@/data/umkmCategories";
import {
  MapPin,
  ShieldCheck,
  Users,
  Palette,
  Landmark,
  ExternalLink,
  ShoppingCart,
  ArrowRight,
  ArrowLeft,
  Layers,
  Music,
  Shirt,
  Hammer,
  Gift,
} from "lucide-react";

const HERO =
  "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ohiicajnq/batak-handicrafts-display.png";
const TOURISM_IMG =
  "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ohvacajjq/village-tourism-experience.png";

const CATEGORY_ICONS = { Layers, Music, Shirt, Hammer, Gift };

const FEATURES = [
  {
    icon: Palette,
    title: "Keterampilan Turun-Temurun",
    text: "Teknik menenun ulos, memahat, dan merajin diwariskan dari generasi ke generasi.",
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

function ProductCard({ product, reversed }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : ""
      } bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}
    >
      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="font-bold text-2xl text-gray-800 mb-3">{product.title}</h3>
        <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
          {product.desc}
        </p>
        <a
          href={product.tokopediaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg w-fit"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 2h3.5l.5 2h13.5a1 1 0 0 1 .97 1.24l-2 8A1 1 0 0 1 17.5 14H7.5a1 1 0 0 1-.97-.76L4.22 4H2V2zm5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
          Beli di Tokopedia
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO} alt="UMKM Desa" className="w-full h-full object-cover" />
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
          Setiap pembelian produk UMKM desa membantu meningkatkan kesejahteraan
          masyarakat dan melestarikan budaya Batak.
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
  );
}

// ---------------- Overview (default) ----------------
function UmkmOverview() {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="inline-block px-5 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4">
              <ShoppingCart className="inline w-4 h-4 mr-1" /> UMKM Unggulan Desa
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
              Produk Khas Desa Siallagan Pindaraya
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-3xl mx-auto">
              UMKM di Desa Siallagan Pindaraya tumbuh dari keterampilan dan
              kreativitas warga yang telah diwariskan turun-temurun, terbagi
              dalam lima kategori produk. Pilih salah satu kategori untuk
              melihat produk lengkap dan tautan pembeliannya di Tokopedia.
            </p>
          </div>

          <UmkmCategorySlider categories={umkmCategories} />

          {/* Quick access grid to all categories */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8">
            {umkmCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/umkm-ekonomi/${cat.id}`)}
                  className="flex flex-col items-center gap-2 bg-stone-50 hover:bg-teal-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-100 grid place-items-center">
                    {Icon && <Icon className="w-6 h-6 text-teal-700" />}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {cat.label}
                  </span>
                </button>
              );
            })}
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
                <h3 className="font-bold text-lg text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{f.text}</p>
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

      <CtaBanner />
      <StoryBehind />
    </>
  );
}

// ---------------- Category detail ----------------
function UmkmCategoryDetail({ category }) {
  const otherCategories = umkmCategories.filter((c) => c.id !== category.id);

  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Link
            to="/umkm-ekonomi"
            className="inline-flex items-center gap-2 text-teal-700 font-medium text-sm mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Kembali ke UMKM & Ekonomi
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block px-5 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4">
                {category.label}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-5">
                {category.label} Khas Desa Siallagan Pindaraya
              </h2>
              <p className="text-gray-700 text-[15.5px] leading-relaxed">
                {category.longDesc}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={category.cover}
                alt={category.label}
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-teal-700 mb-8">
            Produk {category.label}
          </h3>
          <div className="space-y-8">
            {category.products.map((product, i) => (
              <ProductCard key={i} product={product} reversed={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-14">
            Kategori Lainnya
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {otherCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.icon];
              return (
                <Link
                  key={cat.id}
                  to={`/umkm-ekonomi/${cat.id}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] block shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={cat.cover}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <div className="inline-flex items-center gap-2 text-sm md:text-base font-semibold leading-tight">
                      {Icon && <Icon size={16} />} {cat.label}
                    </div>
                    <div className="mt-1 inline-flex items-center gap-1 text-xs opacity-90 group-hover:gap-2 transition-all">
                      Lihat produk <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
      <StoryBehind />
    </>
  );
}

export default function UmkmEkonomi() {
  const { category: categoryId } = useParams();
  const category = categoryId ? getCategoryById(categoryId) : undefined;

  return (
    <>
      <AboutHero
        image={category ? category.cover : HERO}
        title={
          category ? (
            category.label
          ) : (
            <>
              UMKM & Ekonomi
              <br />
              Desa Kami
            </>
          )
        }
        subtitle={
          category
            ? category.shortDesc
            : "Menggerakkan ekonomi lokal lewat kain ulos, alat musik tradisional, pakaian, kerajinan tangan, dan souvenir khas Batak."
        }
      />

      {category ? (
        <UmkmCategoryDetail category={category} />
      ) : (
        <UmkmOverview />
      )}
    </>
  );
}
