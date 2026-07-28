import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

const HERO_IMG = "mainphoto.png";

interface EntranceProps {
  onEnter: () => void;
}

export default function Entrance({ onEnter }: EntranceProps) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleEnter = () => {
    setIsLeaving(true);
    setTimeout(onEnter, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-700 ${
        isLeaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-teal-950/80" />
      </div>

      <div className="relative h-full w-full flex flex-col items-center justify-center px-6 text-center">
        <img
          src="/logo.png"
          alt="Logo Desa Siallagan Pindaraya"
          className={`w-20 h-20 sm:w-24 sm:h-24 mb-8 transition-all duration-1000 ${
            isLeaving ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"
          }`}
        />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-6 fade-up">
          <MapPin size={14} /> Kecamatan Simanindo, Kabupaten Samosir
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-5 fade-up">
          Desa Siallagan
          <br />
          Pindaraya
        </h1>

        <p className="text-white/85 text-base sm:text-xl font-light max-w-xl mb-10 fade-up">
          Menyimpan sejarah dan budaya Batak di tepi Danau Toba
        </p>

        <button
          onClick={handleEnter}
          className="group inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-gray-100 font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 fade-up"
        >
          Jelajahi Desa
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
