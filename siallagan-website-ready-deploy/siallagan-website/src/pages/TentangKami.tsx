import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Users, Building2, Heart, Sprout, ChevronRight, ArrowRight, Map, ExternalLink } from "lucide-react";
import AboutHero from "@/components/AboutHero";
import CountUp from "@/components/CountUp";

const HERO = "https://images.pexels.com/photos/6713121/pexels-photo-6713121.jpeg?auto=compress&cs=tinysrgb&w=1260";
const VILLAGE_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogoycajpa/siallagan-village-panorama-toba.png";
const COMMUNITY_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4og3qcajmq/gotong-royong-community-spirit.png";
const TORTOR_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogbycajka/batak-tortor-dance-cultural.png";
const SMART_FARM_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ocxycajjq/smart-farming-sensors-rice-field.png";
const HYDROPONIC_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4odracajma/hydroponic-farming-automated.png";
const CHICKEN_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4od7ycajka/automated-chicken-feeding-system.png";
const SOLAR_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4oemqcajpa/solar-panel-irrigation-system.png";

import { HandHeart, ShieldCheck, Leaf, Lightbulb, BookOpen, Thermometer, Droplets, Sun, Zap, Clock } from "lucide-react";

const tabs = [
  {
    id: "profil-desa",
    label: "Profil Desa",
    icon: Building2,
    img: "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogoycajpa/siallagan-village-panorama-toba.png",
  },
  {
    id: "struktur-pengelola",
    label: "Struktur Pengelola",
    icon: Users,
    img: "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4og3qcajmq/gotong-royong-community-spirit.png",
  },
  {
    id: "nilai-desa",
    label: "Nilai & Semangat",
    icon: Heart,
    img: "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogbycajka/batak-tortor-dance-cultural.png",
  },
  {
    id: "potensi-desa",
    label: "Potensi Desa",
    icon: Sprout,
    img: "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ocxycajjq/smart-farming-sensors-rice-field.png",
  },
  {
    id: "peta-cerita",
    label: "Peta Cerita",
    icon: Map,
    img: "https://cdn.arcgis.com/sharing/rest/content/items/9b68d279ae584501aa9c731eb0ff6cb6/resources/jFAQhw0SQQAhJ81q7K74I.jpeg?w=800",
  },
];

const STORY_MAP_EMBED_URL =
  "https://storymaps.arcgis.com/stories/9b68d279ae584501aa9c731eb0ff6cb6?embed";
const STORY_MAP_URL =
  "https://storymaps.arcgis.com/stories/9b68d279ae584501aa9c731eb0ff6cb6";

function AboutSubNav({ activeTab, onNavigate }: { activeTab: string; onNavigate: (id: string) => void }) {
  const items = tabs.filter((t) => t.id !== activeTab);

  return (
    <section className="bg-stone-50 py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 text-center mb-14">
          Jelajahi Lainnya
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((t) => (
            <button
              key={t.id}
              onClick={() => onNavigate(t.id)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] block shadow-lg hover:shadow-2xl transition-shadow text-left"
            >
              <img
                src={t.img}
                alt={t.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold leading-tight">
                  <t.icon size={18} /> {t.label}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-sm opacity-90 group-hover:gap-2 transition-all">
                  Selengkapnya <ArrowRight size={14} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Struktur Pengelola Data
const strukturPengelola = [
  { jabatan: "Kepala Desa", nama: "Bapak Mangasi Siallagan", foto: "👤" },
  { jabatan: "Sekretaris Desa", nama: "Bapak Parulian Siallagan", foto: "👤" },
  { jabatan: "Kaur Keuangan", nama: "Ibu Tiurma Situmorang", foto: "👤" },
  { jabatan: "Kaur Perencanaan", nama: "Bapak Jonner Siallagan", foto: "👤" },
  { jabatan: "Kepala Dusun I", nama: "Bapak Romanus Siallagan", foto: "👤" },
  { jabatan: "Kepala Dusun II", nama: "Bapak Tulus Siallagan", foto: "👤" },
  { jabatan: "BPD (Ketua)", nama: "Bapak Binsar Siallagan", foto: "👤" },
  { jabatan: "Karang Taruna (Ketua)", nama: "Saudara Marthin Siallagan", foto: "👤" },
];

// Nilai Desa Data
const VALUES = [
  {
    icon: HandHeart,
    title: "Gotong Royong",
    text: "Semangat saling bantu dalam kehidupan sehari-hari, mulai dari kegiatan adat, pertanian, hingga pembangunan desa.",
  },
  {
    icon: ShieldCheck,
    title: "Dalihan Na Tolu",
    text: "Sistem kekerabatan Batak yang menjadi fondasi kehidupan bermasyarakat: Dongan Sabutuha, Hula-hula, dan Boru.",
  },
  {
    icon: Lightbulb,
    title: "Semangat Inovasi",
    text: "Terbuka terhadap teknologi modern seperti smart farming dan otomasi, tanpa meninggalkan kearifan lokal.",
  },
  {
    icon: BookOpen,
    title: "Pelestarian Budaya",
    text: "Adat, bahasa, dan tradisi Batak dijaga keasliannya agar tetap lestari untuk generasi mendatang.",
  },
  {
    icon: Leaf,
    title: "Keberlanjutan",
    text: "Pemanfaatan alam dan sumber daya desa dilakukan dengan memperhatikan kelestarian lingkungan Danau Toba.",
  },
  {
    icon: Users,
    title: "Kemandirian Desa",
    text: "Desa berusaha mandiri melalui UMKM, pertanian modern, dan pariwisata. Setiap warga berperan aktif.",
  },
];

// Potensi Desa - Sensor Parameters
const sensorParams = [
  { icon: Thermometer, title: "Suhu Udara", desc: "Sensor memantau suhu secara real-time untuk kondisi optimal tanaman." },
  { icon: Droplets, title: "Kelembapan Tanah", desc: "Mengukur tingkat kelembapan untuk mengatur irigasi otomatis." },
  { icon: Leaf, title: "pH Tanah", desc: "Memantau keasaman tanah agar nutrisi tanaman diserap optimal." },
  { icon: Sun, title: "Intensitas Cahaya", desc: "Mengukur paparan sinar matahari untuk fotosintesis maksimal." },
];

function ProfilDesaContent() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
                Tentang Desa Siallagan Pindaraya
              </h2>
              <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
                Desa Siallagan Pindaraya terletak di Kecamatan Simanindo,
                Kabupaten Samosir, Sumatera Utara. Desa ini berada di tepi Danau
                Toba dan merupakan bagian dari Pulau Samosir yang dikenal dengan
                keindahan alam dan kekayaan budaya Batak.
              </p>
              <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
                Desa ini terkenal dengan situs sejarah Batu Parsidangan, tempat
                pengadilan adat Batak yang telah ada sejak ratusan tahun lalu.
                Masyarakat desa masih menjaga tradisi dan adat istiadat Batak
                dalam kehidupan sehari-hari.
              </p>
              <p className="text-gray-700 text-[15.5px] leading-relaxed">
                Dengan populasi yang harmonis, desa ini terus berkembang melalui
                pertanian modern, UMKM kerajinan, dan sektor pariwisata yang
                semakin diminati wisatawan domestik maupun mancanegara.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={VILLAGE_IMG} alt="Desa Siallagan Pindaraya" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-700 mb-1">
                <CountUp end={500} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm">Kepala Keluarga</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-700 mb-1">
                <CountUp end={2000} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm">Jiwa Penduduk</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-700 mb-1">
                <CountUp end={50} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm">Pelaku UMKM</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-700 mb-1">
                <CountUp end={10000} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm">Wisatawan/Tahun</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={COMMUNITY_IMG} alt="Masyarakat desa" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Masyarakat yang Berdaya
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Masyarakat Desa Siallagan Pindaraya dikenal dengan semangat gotong
              royong dan keterbukaan terhadap kemajuan. Warga desa aktif dalam
              berbagai kegiatan pembangunan.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Generasi muda desa turut berperan aktif dalam melestarikan budaya
              sekaligus membawa inovasi baru, seperti penerapan teknologi IoT
              dalam pertanian dan sistem otomasi peternakan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function StrukturPengelolaContent() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
            Struktur Pengelola Desa
          </h2>
          <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-3xl mx-auto">
            Pemerintahan Desa Siallagan Pindaraya dikelola oleh perangkat desa yang dipilih dan dipercaya oleh masyarakat untuk memajukan desa.
          </p>
        </div>

        {/* Kepala Desa - Featured */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 mb-10 text-center max-w-md mx-auto shadow-sm">
          <div className="w-24 h-24 rounded-full bg-teal-200 flex items-center justify-center text-4xl mx-auto mb-4">
            👤
          </div>
          <h3 className="text-xl font-bold text-teal-800">{strukturPengelola[0].nama}</h3>
          <p className="text-teal-600 font-medium">{strukturPengelola[0].jabatan}</p>
        </div>

        {/* Other Staff */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strukturPengelola.slice(1).map((person, i) => (
            <div key={i} className="bg-stone-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-2xl mx-auto mb-3">
                {person.foto}
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{person.nama}</h3>
              <p className="text-teal-600 text-xs font-medium mt-1">{person.jabatan}</p>
            </div>
          ))}
        </div>

        {/* Organization Note */}
        <div className="mt-14 bg-teal-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-teal-700 mb-3">Visi Pemerintahan Desa</h3>
          <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-2xl mx-auto">
            "Mewujudkan Desa Siallagan Pindaraya sebagai desa wisata budaya yang mandiri, berdaya saing, dan sejahtera dengan tetap menjaga kearifan lokal dan kelestarian lingkungan Danau Toba."
          </p>
        </div>
      </div>
    </section>
  );
}

function NilaiDesaContent() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-14">
            Nilai-Nilai Desa
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-teal-50 grid place-items-center mb-5">
                  <v.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dalihan Na Tolu */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={TORTOR_IMG} alt="Budaya Batak" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Dalihan Na Tolu: Fondasi Kehidupan
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Dalihan Na Tolu adalah sistem kekerabatan masyarakat Batak yang
              mengatur hubungan sosial berdasarkan tiga tungku: Dongan Sabutuha,
              Hula-hula, dan Boru.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Melalui Dalihan Na Tolu, masyarakat menjaga keharmonisan,
              menyelesaikan konflik secara musyawarah, dan memastikan setiap
              keputusan diambil dengan mempertimbangkan kepentingan bersama.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function PotensiDesaContent() {
  return (
    <>
      {/* Smart Farming */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="inline-block px-5 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4">
              Smart Farming
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
              Pertanian Cerdas Berbasis Teknologi
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-3xl mx-auto">
              Desa Siallagan Pindaraya telah mengadopsi sistem smart farming dengan sensor canggih untuk mendukung keberhasilan pertanian.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {sensorParams.map((param, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-teal-50 grid place-items-center mb-4">
                  <param.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{param.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{param.desc}</p>
              </div>
            ))}
          </div>

          {/* Solar Irrigation */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={SOLAR_IMG} alt="Sistem irigasi panel surya" className="w-full h-[350px] object-cover" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-5">
                <Zap size={16} /> Irigasi Bertenaga Surya
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">Sistem Irigasi Otomatis</h3>
              <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
                Sistem irigasi di desa kami sudah mengandalkan pompa dengan power supply dari panel surya yang bekerja secara otomatis sesuai kondisi kelembapan tanah.
              </p>
              <p className="text-gray-700 text-[15.5px] leading-relaxed">
                Ketika sensor mendeteksi kelembapan tanah di bawah ambang batas, pompa akan aktif secara otomatis. Sistem ini ramah lingkungan dan menghemat biaya operasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hydroponic */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-5">
              <Droplets size={16} /> Pertanian Hidroponik
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">Hidroponik dengan Penyiraman Otomatis</h3>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Selain pertanian konvensional, desa kami juga memiliki pertanian hidroponik dengan penyiraman otomatis sesuai jadwal.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Sistem ini memungkinkan tanaman mendapatkan nutrisi dan air secara konsisten tanpa pengawasan manual.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
            <img src={HYDROPONIC_IMG} alt="Pertanian hidroponik" className="w-full h-[350px] object-cover" />
          </div>
        </div>
      </section>

      {/* Chicken Farming */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={CHICKEN_IMG} alt="Pemberian pakan ayam otomatis" className="w-full h-[350px] object-cover" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-5">
              <Clock size={16} /> Peternakan Modern
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">Pemberian Pakan Ayam Otomatis</h3>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Untuk sektor peternakan, desa kami telah menggunakan sistem pemberian pakan otomatis sesuai jadwal dan porsi yang ditentukan.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Alat ini memastikan ayam mendapatkan nutrisi yang tepat pada waktu yang tepat, meningkatkan efisiensi peternakan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function PetaCeritaContent() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4">
            <Map size={16} /> Peta Cerita Desa
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
            Jelajahi Desa Siallagan Pindaraya Lewat Peta Cerita
          </h2>
          <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-3xl mx-auto">
            Peta Cerita (Story Map) ini disusun oleh tim KKN-PPM UGM Toba
            Nabasa 2026 untuk mengajak Anda menyusuri lokasi, budaya, dan daya
            tarik wisata Desa Siallagan Pindaraya secara interaktif — lengkap
            dengan peta, foto, dan narasi perjalanan.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <iframe
            src={STORY_MAP_EMBED_URL}
            title="Peta Cerita Desa Siallagan Pindaraya"
            className="w-full"
            style={{ height: "700px", border: "none" }}
            allow="geolocation"
            allowFullScreen
          />
        </div>

        <div className="text-center mt-6">
          <a
            href={STORY_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm hover:gap-3 transition-all"
          >
            Buka Peta Cerita di Tab Baru <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function TentangKami() {
  const { tab } = useParams();
  const activeTab = tab || "profil-desa";
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case "profil-desa":
        return <ProfilDesaContent />;
      case "struktur-pengelola":
        return <StrukturPengelolaContent />;
      case "nilai-desa":
        return <NilaiDesaContent />;
      case "potensi-desa":
        return <PotensiDesaContent />;
      case "peta-cerita":
        return <PetaCeritaContent />;
      default:
        return <ProfilDesaContent />;
    }
  };

  return (
    <>
      <AboutHero
        image={HERO}
        title={<>Tentang<br />Desa Siallagan Pindaraya</>}
        subtitle="Mengenal lebih dekat desa kami di tepi Danau Toba, Pulau Samosir."
      />

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => navigate(`/tentang-kami/${t.id}`)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === t.id
                    ? "bg-teal-50 text-teal-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {renderContent()}

      <AboutSubNav activeTab={activeTab} onNavigate={(id) => navigate(`/tentang-kami/${id}`)} />
    </>
  );
}
