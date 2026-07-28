import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, MessageCircle } from "lucide-react";
import AutoSlideThumbnail from "./AutoSlideThumbnail";

/**
 * Carousel auto-slide untuk kartu "Pilihan Paket Wisata".
 * Dipakai karena jumlah paket bisa lebih dari 3 (mis. 4 pilihan rombongan)
 * sehingga sudah tidak pas lagi ditampilkan sebagai grid statis 3 kolom.
 *
 * Props:
 * - packages: array paket wisata { title, subtitle, duration, price,
 *   priceNote, images, features, whatsappMsg }
 * - whatsappNumber: nomor tujuan tombol "Pesan via WhatsApp"
 * - autoPlayInterval: jeda pergantian slide otomatis dalam ms (default 5000)
 */
const TourPackageCarousel = ({ packages = [], whatsappNumber, autoPlayInterval = 5000 }) => {
  const count = packages.length;

  const [perView, setPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(count);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goTo = (i) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(count + i);
  };

  // Responsif: 1 kartu di mobile, 2 di tablet, 3 di desktop
  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  // Mulai dari salinan tengah supaya carousel bisa slide ke dua arah
  useEffect(() => {
    setCurrentIndex(count);
  }, [count]);

  // Begitu animasi selesai (500ms), diam-diam snap balik ke salinan tengah
  // kalau sudah keluar batas aman — supaya carousel terasa berputar terus
  // tanpa terlihat "lompat".
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (count > 0) {
        if (currentIndex >= count * 2) setCurrentIndex(count);
        else if (currentIndex < 0) setCurrentIndex(count);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex, count]);

  // Auto-play, jeda otomatis saat kursor berada di atas carousel
  useEffect(() => {
    if (isPaused || count <= perView) return;
    const interval = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, count, perView, autoPlayInterval]);

  if (count === 0) return null;

  // Tiga salinan berurutan supaya slide terasa berputar tanpa henti (infinite loop)
  const extended = [...packages, ...packages, ...packages];
  const activeDot = ((currentIndex % count) + count) % count;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {count > perView && (
        <>
          <button
            onClick={goPrev}
            aria-label="Paket sebelumnya"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -ml-4"
          >
            <ChevronLeft className="w-5 h-5 text-teal-700" />
          </button>
          <button
            onClick={goNext}
            aria-label="Paket berikutnya"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -mr-4"
          >
            <ChevronRight className="w-5 h-5 text-teal-700" />
          </button>
        </>
      )}

      <div className="overflow-hidden">
        <div
          className={`flex ${isAnimating ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${currentIndex * (100 / perView)}%)` }}
        >
          {extended.map((pkg, i) => (
            <div key={`${pkg.title}-${i}`} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <AutoSlideThumbnail images={pkg.images} interval={2500} />

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="flex items-center gap-1.5 font-bold text-xl text-gray-800 mb-1">
                    <Users className="w-4 h-4 text-teal-600 shrink-0" />
                    {pkg.title}
                  </h3>
                  {pkg.subtitle && <p className="text-gray-500 text-xs mb-1">{pkg.subtitle}</p>}
                  <p className="text-teal-600 font-medium text-sm mb-2">{pkg.duration}</p>

                  <div className="bg-teal-50 rounded-lg p-3 mb-4">
                    <div className="text-2xl font-bold text-teal-700">{pkg.price}</div>
                    <div className="text-xs text-teal-600">{pkg.priceNote}</div>
                  </div>

                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600 text-[14px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(pkg.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {packages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ke ${packages[i].title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeDot ? "bg-teal-600 w-6" : "bg-teal-200 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TourPackageCarousel;
