import AboutHero from "@/components/AboutHero";
import StoryBehind from "@/components/StoryBehind";
import TourPackageCarousel from "@/components/TourPackageCarousel";
import { Landmark, Home, Calendar, Music, MapPin, MessageCircle } from "lucide-react";

const HERO = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ofvacajjq/batak-homestay-lake-toba.png";
const TORTOR_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogbycajka/batak-tortor-dance-cultural.png";
const VILLAGE_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogoycajpa/siallagan-village-panorama-toba.png";
const TOURISM_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ohvacajjq/village-tourism-experience.png";
const GOTONG_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4og3qcajmq/gotong-royong-community-spirit.png";

// Gambar hero khusus per destinasi/fasilitas (bukan gambar acak yang dipakai ulang).
// Sumber: Pexels (bebas pakai). Ganti src dengan foto asli desa/mitra bila sudah tersedia
// agar lebih otentik — terutama untuk Palito Homestay & Yodi Samosir yang usaha spesifik.
const TRANSPORT_IMG = "https://images.pexels.com/photos/7263971/pexels-photo-7263971.jpeg";
const JETSKI_IMG = "https://images.pexels.com/photos/33080887/pexels-photo-33080887.jpeg";
const FOOD_IMG = "https://images.pexels.com/photos/37065121/pexels-photo-37065121.jpeg";
const FERRY_IMG = "https://images.pexels.com/photos/10058767/pexels-photo-10058767.jpeg";
const SIBEABEA_IMG = "https://images.pexels.com/photos/29991372/pexels-photo-29991372.jpeg";
const HOLBUNG_IMG = "https://images.pexels.com/photos/30756679/pexels-photo-30756679.jpeg";

const WHATSAPP_NUMBER = "6281234567890"; // Nomor WhatsApp desa

// Destinasi & fasilitas paket "Explore Danau Toba" — SAMA untuk keempat paket
// di bawah (2 Hari 2 Malam). Yang membedakan tiap paket hanya jumlah rombongan
// dan harga per orang, lihat TOUR_PACKAGES.
const ITINERARY_ITEMS = [
  { src: TRANSPORT_IMG, label: "Transportasi (Termasuk BBM & Supir)" },
  { src: VILLAGE_IMG, label: "Tiket Masuk Huta Siallagan" },
  { src: HERO, label: "Palito Homestay (1 Malam)" },
  { src: JETSKI_IMG, label: "Sewa Jetski" },
  { src: FOOD_IMG, label: "Makan di Yodi Samosir" },
  { src: FERRY_IMG, label: "Tiket Ferry Berangkat" },
  { src: SIBEABEA_IMG, label: "Tiket Masuk Sibea-bea" },
  { src: HOLBUNG_IMG, label: "Tiket Masuk Bukit Holbung" },
  { src: HOLBUNG_IMG, label: "Parkir Bukit Holbung" },
  { src: FERRY_IMG, label: "Tiket Ferry Pulang" },
];
const ITINERARY_FEATURES = ITINERARY_ITEMS.map((item) => item.label);

// 4 pilihan paket wisata — destinasi & durasi SAMA (2 Hari 2 Malam),
// hanya jumlah rombongan (pax) dan harga per orang yang berbeda.
const TOUR_PACKAGES = [
  {
    title: "Rombongan 4 Orang",
    subtitle: "Huta Siallagan • Sibea-bea • Bukit Holbung",
    duration: "2 Hari 2 Malam",
    pax: 4,
    price: "Rp1.400.000",
    priceNote: "per orang (4 pax)",
    images: ITINERARY_ITEMS,
    features: ITINERARY_FEATURES,
    whatsappMsg:
      "Halo, saya tertarik dengan Paket Wisata Explore Danau Toba 2 Hari 2 Malam untuk rombongan 4 orang (Rp1.400.000/orang). Bisa info lebih lanjut?",
  },
  {
    title: "Rombongan 5 Orang",
    subtitle: "Huta Siallagan • Sibea-bea • Bukit Holbung",
    duration: "2 Hari 2 Malam",
    pax: 5,
    price: "Rp1.300.000",
    priceNote: "per orang (5 pax)",
    images: ITINERARY_ITEMS,
    features: ITINERARY_FEATURES,
    whatsappMsg:
      "Halo, saya tertarik dengan Paket Wisata Explore Danau Toba 2 Hari 2 Malam untuk rombongan 5 orang (Rp1.300.000/orang). Bisa info lebih lanjut?",
  },
  {
    title: "Rombongan 6 Orang",
    subtitle: "Huta Siallagan • Sibea-bea • Bukit Holbung",
    duration: "2 Hari 2 Malam",
    pax: 6,
    price: "Rp1.250.000",
    priceNote: "per orang (6 pax)",
    images: ITINERARY_ITEMS,
    features: ITINERARY_FEATURES,
    whatsappMsg:
      "Halo, saya tertarik dengan Paket Wisata Explore Danau Toba 2 Hari 2 Malam untuk rombongan 6 orang (Rp1.250.000/orang). Bisa info lebih lanjut?",
  },
  {
    title: "Rombongan 7 Orang",
    subtitle: "Huta Siallagan • Sibea-bea • Bukit Holbung",
    duration: "2 Hari 2 Malam",
    pax: 7,
    price: "Rp1.200.000",
    priceNote: "per orang (7 pax)",
    images: ITINERARY_ITEMS,
    features: ITINERARY_FEATURES,
    whatsappMsg:
      "Halo, saya tertarik dengan Paket Wisata Explore Danau Toba 2 Hari 2 Malam untuk rombongan 7 orang (Rp1.200.000/orang). Bisa info lebih lanjut?",
  },
];

const CULTURAL_ITEMS = [
  {
    icon: Music,
    title: "Musik Tradisional",
    desc: "Gondang Sabangunan dan Hasapi masih dimainkan dalam upacara adat dan pertunjukan budaya desa.",
  },
  {
    icon: Calendar,
    title: "Upacara Adat",
    desc: "Berbagai upacara adat Batak masih rutin dilaksanakan, dari pernikahan hingga syukuran panen.",
  },
  {
    icon: Home,
    title: "Rumah Adat Bolon",
    desc: "Rumah tradisional Batak dengan arsitektur khas yang masih terjaga dan menjadi daya tarik wisata.",
  },
  {
    icon: Landmark,
    title: "Batu Parsidangan",
    desc: "Situs bersejarah tempat pengadilan adat Batak yang menjadi saksi bisu sejarah masyarakat Siallagan.",
  },
];

export default function WisataBudaya() {
  return (
    <>
      <AboutHero
        image={HERO}
        title={
          <>
            Wisata & Budaya
            <br />
            Desa Kami
          </>
        }
        subtitle="Pesona alam, homestay, dan warisan budaya Batak yang hidup di Desa Siallagan Pindaraya."
      />

      {/* Tourism Intro */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={TOURISM_IMG}
              alt="Wisata desa"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 leading-tight">
              Wisata Desa: Bukan Sekadar Kunjungan, Tapi Pengalaman
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Desa Siallagan Pindaraya mengajak pengunjung untuk mengenal
              langsung kehidupan masyarakat Batak, mulai dari adat istiadat,
              kesenian, hingga suasana khas di tepi Danau Toba.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Kami menyediakan berbagai paket wisata yang dirancang untuk
              memberikan pengalaman autentik, mulai dari homestay di rumah warga,
              workshop kerajinan, hingga pertunjukan budaya.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Baik untuk wisatawan yang ingin belajar budaya, maupun yang sekadar
              menikmati keindahan alam, desa kami menyambut dengan keramahan khas
              masyarakat Batak.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Packages with Price & WhatsApp */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="inline-block px-5 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4">
              <MapPin className="inline w-4 h-4 mr-1" /> Paket Wisata
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
              Pilihan Paket Wisata Desa
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-3xl mx-auto">
              Satu program wisata <strong>2 Hari 2 Malam</strong> menjelajahi Huta
              Siallagan, Sibea-bea, dan Bukit Holbung — tersedia dalam 4 pilihan
              rombongan dengan harga per orang yang berbeda. Destinasi dan
              fasilitasnya sama persis, hanya jumlah rombongan dan harganya yang
              membedakan. Hubungi kami via WhatsApp untuk pemesanan.
            </p>
          </div>

          <TourPackageCarousel packages={TOUR_PACKAGES} whatsappNumber={WHATSAPP_NUMBER} />
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
              Budaya yang Masih Terjaga
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-3xl mx-auto">
              Di tengah modernisasi, Desa Siallagan Pindaraya tetap menjaga
              warisan budaya Batak yang telah ada sejak ratusan tahun lalu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {CULTURAL_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-50 grid place-items-center mb-4">
                  <item.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Culture Image Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={TORTOR_IMG} alt="Tari Tor-Tor" className="w-full h-[300px] object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={GOTONG_IMG} alt="Kehidupan masyarakat" className="w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Homestay Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-5">
              <Home size={16} /> Homestay Desa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-5">
              Menginap di Tengah Kehidupan Desa
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Homestay di Desa Siallagan Pindaraya menawarkan pengalaman
              menginap yang berbeda. Anda akan tinggal bersama keluarga lokal,
              merasakan kehidupan sehari-hari masyarakat Batak, dan menikmati
              pemandangan Danau Toba dari dekat.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-6">
              Fasilitas yang nyaman dipadukan dengan keramahan khas masyarakat
              desa, menjadikan setiap kunjungan sebagai pengalaman yang tak
              terlupakan.
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Halo, saya ingin bertanya tentang homestay di Desa Siallagan Pindaraya. Bisa info ketersediaan dan harga?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Tanya Ketersediaan Homestay
            </a>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
            <img src={HERO} alt="Homestay desa" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={VILLAGE_IMG} alt="Desa Siallagan" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-teal-900/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-6 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white font-medium text-sm mb-5 backdrop-blur">
            <Landmark size={16} /> Desa Wisata Budaya
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Menjelajahi Desa Kami?
          </h2>
          <p className="text-white/90 text-[15.5px] leading-relaxed mb-8">
            Hubungi kami melalui WhatsApp untuk informasi lebih lanjut tentang paket wisata, homestay, dan kegiatan budaya di Desa Siallagan Pindaraya.
          </p>
          <a
            href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Halo, saya tertarik dengan wisata di Desa Siallagan Pindaraya. Bisa info lebih lanjut?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>

      <StoryBehind />
    </>
  );
}