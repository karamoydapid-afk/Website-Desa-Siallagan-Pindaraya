import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, Landmark, ShoppingBag, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Entrance from "@/components/Entrance";

const HERO_IMG = "mainphoto.png?auto=compress&cs=tinysrgb&w=1260";
const VILLAGE_IMG = "https://images.pexels.com/photos/6713121/pexels-photo-6713121.jpeg";

const features = [
  {
    icon: Leaf,
    title: "Smart Farming",
    desc: "Pertanian modern dengan sensor IoT dan irigasi otomatis bertenaga surya.",
    link: "/tentang-kami/potensi-desa",
  },
  {
    icon: ShoppingBag,
    title: "UMKM Kreatif",
    desc: "Kerajinan tangan, kain ulos, dan pahatan patung khas Batak.",
    link: "/umkm-ekonomi",
  },
  {
    icon: Landmark,
    title: "Wisata & Budaya",
    desc: "Paket wisata desa, homestay, dan budaya Batak yang masih terjaga.",
    link: "/wisata-budaya",
  },
  {
    icon: Users,
    title: "Gotong Royong",
    desc: "Semangat kebersamaan dan nilai-nilai luhur masyarakat Batak.",
    link: "/tentang-kami/nilai-desa",
  },
];

export default function HomePage() {
  const [hasEntered, setHasEntered] = useState(
    () => sessionStorage.getItem("siallagan_entered") === "1"
  );

  const handleEnter = () => {
    sessionStorage.setItem("siallagan_entered", "1");
    setHasEntered(true);
  };

  return (
    <div className="min-h-screen">
      {!hasEntered && <Entrance onEnter={handleEnter} />}
      <Navbar />

      {/* Highlights Hero — quick facts about the village at a glance */}
      <div className="relative min-h-[85vh] w-full overflow-hidden flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-teal-950/90" />
        </div>

        <div className="relative flex-1 flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                Portal Digital Desa
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Desa yang Memadukan
                <br />
                Tradisi dan Teknologi
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 font-light max-w-2xl">
                Simak profil, potensi, UMKM, wisata, hingga artikel terbaru
                seputar Desa Siallagan Pindaraya di satu tempat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Profil Desa Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4">
              <Play size={16} /> Video Profil
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
              Mengenal Desa Siallagan Pindaraya
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-2xl mx-auto">
              Saksikan keindahan alam, kekayaan budaya, dan potensi desa kami melalui video profil berikut.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1clEM_Kyxz693Y5Sq_uxU6olK9ZMU191V/preview"
                title="Video Profil Desa Siallagan Pindaraya"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-4 italic">
              Video Profil Desa Siallagan Pindaraya — Kecamatan Simanindo, Kabupaten Samosir
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
                Desa yang Memadukan Tradisi dan Teknologi
              </h2>
              <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
                Desa Siallagan Pindaraya terletak di tepi Danau Toba, Pulau
                Samosir. Desa ini dikenal dengan warisan budaya Batak yang masih
                terjaga, sekaligus telah mengadopsi teknologi modern dalam
                pertanian dan peternakan.
              </p>
              <p className="text-gray-700 text-[15.5px] leading-relaxed">
                Dari smart farming dengan sensor IoT hingga kerajinan tangan
                khas Batak, desa kami terus berkembang tanpa meninggalkan
                identitas budaya yang menjadi kebanggaan masyarakat.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={VILLAGE_IMG}
                alt="Desa Siallagan Pindaraya"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-14">
            Keunggulan Desa Kami
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Link
                key={i}
                to={f.link}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="w-16 h-16 rounded-xl bg-teal-50 grid place-items-center mb-5">
                  <f.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {f.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Desa Siallagan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ayo Jelajahi Desa Siallagan Pindaraya
          </h2>
          <p className="text-white/90 text-[15.5px] leading-relaxed mb-8">
            Temukan potensi desa, keindahan budaya, dan keramahan masyarakat
            Batak yang menanti kedatangan Anda.
          </p>
          <Link
            to="/wisata-budaya"
            className="inline-flex items-center bg-white text-teal-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-md transition-all duration-300"
          >
            Lihat Paket Wisata
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
