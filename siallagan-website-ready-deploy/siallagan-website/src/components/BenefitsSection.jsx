import React from 'react';
import { benefits } from '@/data/mock';

const BenefitsSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/37838574/pexels-photo-37838574.jpeg"
                alt="Potensi Desa Siallagan Pindaraya"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-600 rounded-full opacity-10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-600 rounded-full opacity-10 -z-10"></div>
          </div>

          {/* Right: Benefits */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 mb-8">
              Mengapa Berkunjung ke Desa Kami
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="group">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
