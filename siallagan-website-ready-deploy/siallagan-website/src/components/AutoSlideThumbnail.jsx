import { useEffect, useState } from "react";

/**
 * Thumbnail carousel yang otomatis bergonta-ganti gambar.
 * Dipakai untuk menampilkan "gambar hero" dari setiap item yang termasuk
 * dalam sebuah paket wisata (mis. transportasi, tiket masuk, homestay, dll).
 *
 * Props:
 * - images: [{ src, label }] — urutan gambar & label item yang ditampilkan
 * - interval: jeda pergantian gambar dalam ms (default 3000)
 */
const AutoSlideThumbnail = ({ images = [], interval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative h-48 w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.label || `Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Label item yang sedang tampil */}
      {images[index]?.label && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-8 pb-3">
          <span className="text-white text-xs font-semibold tracking-wide">
            {images[index].label}
          </span>
        </div>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Tampilkan gambar ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === index ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSlideThumbnail;
