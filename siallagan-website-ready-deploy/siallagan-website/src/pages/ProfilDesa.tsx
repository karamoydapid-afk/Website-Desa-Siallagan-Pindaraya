import AboutHero from "@/components/AboutHero";
import StoryBehind from "@/components/StoryBehind";

const HERO = "https://images.pexels.com/photos/6713121/pexels-photo-6713121.jpeg?auto=compress&cs=tinysrgb&w=1260";
const VILLAGE_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ogoycajpa/siallagan-village-panorama-toba.png";
const COMMUNITY_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4og3qcajmq/gotong-royong-community-spirit.png";

export default function ProfilDesa() {
  return (
    <>
      <AboutHero
        image={HERO}
        title={
          <>
            Profil
            <br />
            Desa Siallagan Pindaraya
          </>
        }
        subtitle="Mengenal lebih dekat desa kami di tepi Danau Toba, Pulau Samosir."
      />

      {/* About Section */}
      <section className="bg-white py-20">
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
              <img
                src={VILLAGE_IMG}
                alt="Desa Siallagan Pindaraya"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-700 mb-1">218</div>
              <div className="text-gray-600 text-sm">Kepala Keluarga</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-700 mb-1">826</div>
              <div className="text-gray-600 text-sm">Jiwa Penduduk</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-700 mb-1">68</div>
              <div className="text-gray-600 text-sm">Pelaku UMKM</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-700 mb-1">10K+</div>
              <div className="text-gray-600 text-sm">Wisatawan/Tahun</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={COMMUNITY_IMG}
              alt="Masyarakat desa"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Masyarakat yang Berdaya
            </h2>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Masyarakat Desa Siallagan Pindaraya dikenal dengan semangat gotong
              royong dan keterbukaan terhadap kemajuan. Warga desa aktif dalam
              berbagai kegiatan pembangunan, mulai dari pertanian modern hingga
              pengembangan pariwisata.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed mb-4">
              Generasi muda desa turut berperan aktif dalam melestarikan budaya
              sekaligus membawa inovasi baru, seperti penerapan teknologi IoT
              dalam pertanian dan sistem otomasi peternakan.
            </p>
            <p className="text-gray-700 text-[15.5px] leading-relaxed">
              Keharmonisan antara generasi tua dan muda menjadi kekuatan utama
              desa dalam menghadapi tantangan zaman.
            </p>
          </div>
        </div>
      </section>

      <StoryBehind />
    </>
  );
}
