import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Auto-slide kategori UMKM. Menampilkan satu kategori pada satu waktu
 * (gambar + deskripsi singkat), berganti otomatis, dan bisa diklik
 * untuk menuju halaman detail kategori (/umkm-ekonomi/:id).
 */
const UmkmCategorySlider = ({ categories, interval = 4500 }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, interval);
    return () => clearInterval(timer);
  }, [categories.length, interval, isPaused]);

  if (categories.length === 0) return null;

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] cursor-pointer group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => navigate(`/umkm-ekonomi/${categories[index].id}`)}
      role="button"
      aria-label={`Lihat kategori ${categories[index].label}`}
    >
      {categories.map((cat, i) => (
        <img
          key={cat.id}
          src={cat.cover}
          alt={cat.label}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          } group-hover:scale-105 transition-transform duration-700`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 text-white max-w-2xl">
        <div className="inline-block px-4 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-wide mb-4">
          Kategori {index + 1} / {categories.length}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          {categories[index].label}
        </h3>
        <p className="text-white/90 text-[14.5px] sm:text-base leading-relaxed mb-5">
          {categories[index].shortDesc}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-teal-700 px-5 py-2.5 rounded-lg group-hover:gap-3 transition-all">
          Lihat Produk <ArrowRight size={16} />
        </span>
      </div>

      {/* Dots */}
      <div className="absolute top-5 right-5 flex gap-2 z-10">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            aria-label={`Tampilkan kategori ${cat.label}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "bg-white w-8" : "bg-white/50 w-1.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UmkmCategorySlider;
