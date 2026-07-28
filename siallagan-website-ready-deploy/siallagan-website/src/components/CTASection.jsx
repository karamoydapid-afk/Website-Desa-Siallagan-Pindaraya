import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/34042007/pexels-photo-34042007.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
            Desa Wisata Budaya
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Jelajahi Pesona
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl">Desa Siallagan Pindaraya</span>
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Sejarah, budaya, wisata, potensi desa, dan UMKM dalam satu laman
        </p>
        <Button 
          size="lg"
          className="bg-white text-teal-700 hover:bg-gray-100 font-semibold px-10 py-6 text-lg rounded-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          Kenali Desa Kami
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CTASection;
