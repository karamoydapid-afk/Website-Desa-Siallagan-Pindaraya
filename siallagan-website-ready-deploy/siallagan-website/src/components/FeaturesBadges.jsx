import React from 'react';
import { HandHeart, Leaf, Award, Users, Star, Recycle } from 'lucide-react';

const iconMap = {
  'HandHeart': HandHeart,
  'Leaf': Leaf,
  'Award': Award,
  'Users': Users,
  'Star': Star,
  'Recycle': Recycle
};

const FeaturesBadges = () => {
  const features = [
    { icon: 'HandHeart', label: 'Budaya' },
    { icon: 'Leaf', label: 'Alam' },
    { icon: 'Award', label: 'Sejarah' },
    { icon: 'Users', label: 'Wisata' },
    { icon: 'Star', label: 'UMKM' },
    { icon: 'Recycle', label: 'Potensi Desa' }
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-700 mb-4">
            Mengenal Lebih Dekat
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Desa Siallagan Pindaraya dari berbagai sisi
          </p>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-full border-4 border-teal-600 aspect-square hover:bg-teal-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconComponent className="w-10 h-10 text-teal-600 mb-2" strokeWidth={2} />
                <span className="text-xs sm:text-sm font-bold text-teal-700 text-center uppercase tracking-wide">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Product Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/37876031/pexels-photo-37876031.jpeg"
            alt="Kehidupan dan Kerajinan Desa Siallagan Pindaraya"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBadges;
