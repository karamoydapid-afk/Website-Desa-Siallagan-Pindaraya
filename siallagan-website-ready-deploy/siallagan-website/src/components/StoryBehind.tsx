import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    to: "/tentang-kami/profil-desa",
    label: "Profil Desa",
    img: "https://images.pexels.com/photos/6713121/pexels-photo-6713121.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    to: "/tentang-kami/potensi-desa",
    label: "Potensi Desa",
    img: "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ocxycajjq/smart-farming-sensors-rice-field.png",
  },
  {
    to: "/tentang-kami/nilai-desa",
    label: "Nilai & Semangat Desa",
    img: "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4og3qcajmq/gotong-royong-community-spirit.png",
  },
  {
    to: "/umkm-ekonomi",
    label: "UMKM & Ekonomi Desa",
    img: "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ohiicajnq/batak-handicrafts-display.png",
  },
  {
    to: "/wisata-budaya",
    label: "Wisata & Budaya Desa",
    img: "https://mgx-backend-cdn.metadl.com/generate/images/1458805/2026-07-23/ta4ofvacajjq/batak-homestay-lake-toba.png",
  },
];

export default function StoryBehind() {
  const { pathname } = useLocation();
  const filtered = stories.filter((s) => s.to !== pathname);

  return (
    <section className="bg-stone-50 py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 text-center mb-14">
          Jelajahi Lainnya
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] block shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={s.img}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-lg md:text-xl font-semibold leading-tight">
                  {s.label}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-sm opacity-90 group-hover:gap-2 transition-all">
                  Selengkapnya <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}