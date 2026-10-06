import React, { useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { SALON_DATA, GalleryItem } from '../data/salonConfig';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Hair Styling', 'Hair Color', 'Salon Interior', 'Beauty Treatments', 'Bridal Looks', 'Nail Care'];

  const filteredGallery = activeFilter === 'ALL'
    ? SALON_DATA.gallery
    : SALON_DATA.gallery.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F5EFE6]/35 border-t border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
              EDITORIAL ARCHIVE
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
              OUR WORK
            </h2>
            <p className="text-sm sm:text-base text-[#78716C]">
              A curated lookbook spanning bespoke cuts, multidimensional hair colors, serene studio architecture and memorable bridal aesthetics.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#1C1917] hover:text-[#9D3D62] transition-colors shrink-0 group self-start md:self-end"
          >
            <span>VIEW FULL GALLERY</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] font-medium whitespace-nowrap cursor-pointer transition-colors border ${
                activeFilter === cat
                  ? 'bg-[#1C1917] text-white border-[#1C1917]'
                  : 'bg-[#FAF8F5] text-[#57534E] border-[#D6CCC2] hover:border-[#9D3D62] hover:text-[#9D3D62]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric / Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => {
            const isTall = idx === 1 || idx === 6;
            const isWide = idx === 0 || idx === 5;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden bg-[#ECE8E0] border border-[#E7E2DA] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isWide ? 'sm:col-span-2 aspect-[16/10]' : isTall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter saturate-[0.92] group-hover:scale-108 group-hover:saturate-[1.02] transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Hover Gradient & Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E8B4C8]">
                    {item.category}
                  </span>
                  <p className="font-serif text-lg font-medium text-white leading-snug mt-1">
                    {item.title}
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] text-white/80 uppercase tracking-widest font-medium">
                    <ZoomIn className="w-3.5 h-3.5 text-[#E8B4C8]" />
                    <span>Expand</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#1C1917] border border-white/10 shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-[#9D3D62] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#1C1917] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8B4C8] font-semibold">
                  {selectedImage.category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-light text-white">
                  {selectedImage.title}
                </h4>
              </div>
              <p className="text-xs text-white/60 sm:text-right">
                Pink Salon Editorial Lookbook
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
