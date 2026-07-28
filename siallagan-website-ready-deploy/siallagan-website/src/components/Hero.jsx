import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/6713121/pexels-photo-6713121.jpeg)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              SELAMAT DATANG DI
              <br />
              DESA SIALLAGAN PINDARAYA
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light">
              Menyimpan Sejarah dan Budaya Batak,
              <br />
              Menawarkan Pesona Wisata dan Potensi Desa yang Berdaya
            </p>
            <Button 
              size="lg"
              className="bg-white text-teal-700 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Jelajahi Desa Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
