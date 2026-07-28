import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'PROFIL DESA KAMI',
      subtitle: 'OUR VILLAGE PROFILE',
      thumbnail: 'https://images.pexels.com/photos/6713121/pexels-photo-6713121.jpeg',
      description: 'Mengenal lebih dekat sejarah, masyarakat, dan kehidupan Desa Siallagan Pindaraya'
    },
    {
      id: 2,
      title: 'PESONA WISATA & BUDAYA',
      subtitle: 'TOURISM & CULTURAL HERITAGE',
      thumbnail: 'https://images.pexels.com/photos/37628562/pexels-photo-37628562.jpeg',
      description: 'Keindahan alam, budaya, dan tradisi Desa Siallagan Pindaraya'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-stone-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative h-80 sm:h-96">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs sm:text-sm text-white/80 font-semibold mb-2 tracking-widest">
                    {video.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          {selectedVideo && (
            <div className="bg-gray-900">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedVideo.title}</h3>
                <p className="text-gray-300 mb-6">{selectedVideo.description}</p>
                <div className="bg-gray-800 rounded-lg p-8">
                  <p className="text-gray-400">Video akan ditampilkan di sini</p>
                  <p className="text-sm text-gray-500 mt-2">(Video player akan diintegrasikan)</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
