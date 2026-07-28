import AboutHero from "@/components/AboutHero";
import StoryBehind from "@/components/StoryBehind";
import { HandHeart, ShieldCheck, Leaf, Users, Lightbulb, BookOpen } from "lucide-react";

const HERO = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4og3qcajmq/gotong-royong-community-spirit.png";
const VILLAGE_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogoycajpa/siallagan-village-panorama-toba.png";
const TORTOR_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogbycajka/batak-tortor-dance-cultural.png";

const VALUES = [
  {
    icon: HandHeart,
    title: "Gotong Royong",
    text: "Semangat saling bantu dalam kehidupan sehari-hari, mulai dari kegiatan adat, pertanian, hingga pembangunan desa. Masyarakat bekerja bersama tanpa pamrih.",
  },
  {
    icon: ShieldCheck,
    title: "Dalihan Na Tolu",
    text: "Sistem kekerabatan Batak yang menjadi fondasi kehidupan bermasyarakat: Dongan Sabutuha, Hula-hula, dan Boru. Menjaga keseimbangan hubungan sosial.",
  },
  {
    icon: Lightbulb,
    title: "Semangat Inovasi",
    text: "Terbuka terhadap teknologi modern seperti smart farming dan otomasi, tanpa meninggalkan kearifan lokal yang telah diwariskan turun-temurun.",
  },
  {
    icon: BookOpen,
    title: "Pelestarian Budaya",
    text: "Adat, bahasa, dan tradisi Batak dijaga keasliannya agar tetap lestari. Generasi muda dilibatkan aktif dalam kegiatan budaya desa.",
  },
  {
    icon: Leaf,
    title: "Keberlanjutan",
    text: "Pemanfaatan alam dan sumber daya desa dilakukan dengan memperhatikan kelestarian lingkungan sekitar Danau Toba untuk generasi mendatang.",
  },
  {
    icon: Users,
    title: "Kemandirian Desa",
    text: "Desa berusaha mandiri melalui UMKM, pertanian modern, dan pariwisata. Setiap warga berperan aktif dalam membangun ekonomi desa.",
  },
];

export default function NilaiDesa() {
  return (
    <>
      <AboutHero
        image={HERO}
        title={
          <>
            Nilai & Semangat
            <br />
            Desa Kami
          </>
        }
        subtitle="Nilai-nilai luhur yang menjadi pijakan hidup bermasyarakat di Desa Siallagan Pindaraya."
      />

      {/* Values Grid */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 text-center mb-14">
            Nilai-Nilai Desa
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-teal-50 grid place-items-center mb-5">
                  <v.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dalihan Na Tolu Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={TORTOR_IMG}
              alt="Budaya Batak"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Dalihan Na Tolu: Fondasi Kehidupan Bermasyarakat
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Dalihan Na Tolu adalah sistem kekerabatan masyarakat Batak yang
              mengatur hubungan sosial berdasarkan tiga tungku: Dongan Sabutuha
              (teman semarga), Hula-hula (keluarga pemberi istri), dan Boru
              (keluarga penerima istri).
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Sistem ini menjadi fondasi dalam setiap pengambilan keputusan,
              upacara adat, dan kehidupan sehari-hari masyarakat Desa Siallagan
              Pindaraya.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Melalui Dalihan Na Tolu, masyarakat menjaga keharmonisan,
              menyelesaikan konflik secara musyawarah, dan memastikan setiap
              keputusan diambil dengan mempertimbangkan kepentingan bersama.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Spirit Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Tradisi Bertemu Inovasi
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Desa Siallagan Pindaraya membuktikan bahwa tradisi dan inovasi
              dapat berjalan beriringan. Masyarakat terbuka terhadap teknologi
              modern seperti smart farming, sistem otomasi peternakan, dan
              pertanian hidroponik.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Namun di saat yang sama, nilai-nilai gotong royong, adat istiadat,
              dan kearifan lokal tetap dijaga sebagai identitas yang tidak bisa
              digantikan.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Semangat inilah yang menjadikan desa kami unik — mampu bersaing di
              era modern tanpa kehilangan jati diri sebagai masyarakat Batak.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={VILLAGE_IMG}
              alt="Desa Siallagan modern"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      <StoryBehind />
    </>
  );
}