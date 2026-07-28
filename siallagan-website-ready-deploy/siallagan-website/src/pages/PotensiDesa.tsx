import AboutHero from "@/components/AboutHero";
import StoryBehind from "@/components/StoryBehind";
import { Thermometer, Droplets, Leaf, Sun, Zap, Clock } from "lucide-react";

const HERO = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ocxycajjq/smart-farming-sensors-rice-field.png";
const HYDROPONIC_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4odracajma/hydroponic-farming-automated.png";
const CHICKEN_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4od7ycajka/automated-chicken-feeding-system.png";
const SOLAR_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4oemqcajpa/solar-panel-irrigation-system.png";

const sensorParams = [
  {
    icon: Thermometer,
    title: "Suhu Udara",
    desc: "Sensor memantau suhu secara real-time untuk memastikan kondisi optimal bagi tanaman.",
  },
  {
    icon: Droplets,
    title: "Kelembapan Tanah",
    desc: "Mengukur tingkat kelembapan tanah untuk mengatur jadwal irigasi secara otomatis.",
  },
  {
    icon: Leaf,
    title: "pH Tanah",
    desc: "Memantau keasaman tanah agar nutrisi tanaman dapat diserap dengan optimal.",
  },
  {
    icon: Sun,
    title: "Intensitas Cahaya",
    desc: "Mengukur paparan sinar matahari untuk mendukung proses fotosintesis yang maksimal.",
  },
];

export default function PotensiDesa() {
  return (
    <>
      <AboutHero
        image={HERO}
        title={
          <>
            Potensi
            <br />
            Desa Siallagan Pindaraya
          </>
        }
        subtitle="Pertanian cerdas dan peternakan modern yang menjadi kekuatan desa kami."
      />

      {/* Smart Farming Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="inline-block px-5 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-4">
              Smart Farming
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
              Pertanian Cerdas Berbasis Teknologi
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-3xl mx-auto">
              Desa Siallagan Pindaraya telah mengadopsi sistem smart farming
              yang mengandalkan alat dengan sensor canggih untuk mendeteksi
              berbagai parameter penting dalam mendukung keberhasilan pertanian.
            </p>
          </div>

          {/* Sensor Parameters Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {sensorParams.map((param, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-50 grid place-items-center mb-4">
                  <param.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {param.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {param.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Solar Irrigation */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={SOLAR_IMG}
                alt="Sistem irigasi panel surya"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-5">
                <Zap size={16} /> Irigasi Bertenaga Surya
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
                Sistem Irigasi Otomatis
              </h3>
              <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
                Sistem irigasi di desa kami sudah mengandalkan pompa dengan power
                supply dari panel surya yang bekerja secara otomatis sesuai
                kondisi kelembapan tanah.
              </p>
              <p className="text-gray-700 text-[15.5px] leading-relaxed">
                Ketika sensor mendeteksi kelembapan tanah di bawah ambang batas,
                pompa akan aktif secara otomatis untuk mengalirkan air ke sawah.
                Sistem ini ramah lingkungan dan menghemat biaya operasional
                petani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hydroponic Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-5">
                <Droplets size={16} /> Pertanian Hidroponik
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
                Hidroponik dengan Penyiraman Otomatis
              </h3>
              <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
                Selain pertanian konvensional, Desa Siallagan Pindaraya juga
                memiliki pertanian hidroponik yang sudah mengandalkan alat untuk
                melakukan penyiraman secara otomatis sesuai jadwal yang sudah
                ditentukan.
              </p>
              <p className="text-gray-700 text-[15.5px] leading-relaxed">
                Sistem ini memungkinkan tanaman mendapatkan nutrisi dan air
                secara konsisten tanpa perlu pengawasan manual, sehingga hasil
                panen lebih optimal dan efisien.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={HYDROPONIC_IMG}
                alt="Pertanian hidroponik otomatis"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chicken Farming Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={CHICKEN_IMG}
                alt="Sistem pemberian pakan ayam otomatis"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-5">
                <Clock size={16} /> Peternakan Modern
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
                Pemberian Pakan Ayam Otomatis
              </h3>
              <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
                Untuk sektor peternakan, khususnya ayam, desa kami telah
                menggunakan sistem pemberian pakan otomatis yang dapat memberikan
                pakan sesuai jadwal dan porsi yang sudah ditentukan.
              </p>
              <p className="text-gray-700 text-[15.5px] leading-relaxed">
                Alat ini memastikan ayam mendapatkan nutrisi yang tepat pada
                waktu yang tepat, meningkatkan efisiensi peternakan dan
                mengurangi pemborosan pakan. Peternak dapat mengatur jadwal dan
                porsi melalui pengaturan yang telah dikonfigurasi sebelumnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO}
            alt="Smart Farming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Desa Cerdas, Pertanian Berdaya
          </h2>
          <p className="text-white/90 text-[15.5px] leading-relaxed">
            Dengan mengadopsi teknologi IoT, panel surya, dan sistem otomasi,
            Desa Siallagan Pindaraya membuktikan bahwa desa dapat menjadi
            pelopor pertanian dan peternakan modern yang berkelanjutan.
          </p>
        </div>
      </section>

      <StoryBehind />
    </>
  );
}