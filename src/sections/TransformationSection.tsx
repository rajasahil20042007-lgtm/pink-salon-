import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Clock, UserCheck, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { SALON_DATA, TransformationItem } from '../data/salonConfig';

interface TransformationSliderProps {
  onBookService: (serviceName: string) => void;
}

export const TransformationSection: React.FC<TransformationSliderProps> = ({ onBookService }) => {
  const transformations = SALON_DATA.transformations;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem: TransformationItem = transformations[currentIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
            BEFORE & AFTER
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
            THE TRANSFORMATION
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] font-normal">
            See the difference. Experience the confidence.
          </p>
        </div>

        {/* Tab Selector for Transformation Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {transformations.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer border ${
                currentIndex === idx
                  ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917] shadow-sm'
                  : 'bg-[#FAF8F5] text-[#57534E] border-[#D6CCC2] hover:border-[#9D3D62] hover:text-[#9D3D62]'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* The Slider Canvas (8 cols on desktop) */}
            <div className="lg:col-span-8">
              <div
                ref={containerRef}
                className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-[#D6CCC2] shadow-2xl select-none cursor-ew-resize bg-[#292524]"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onClick={(e) => handleMove(e.clientX)}
              >
                {/* AFTER Image (Full container width underneath) */}
                <img
                  src={activeItem.afterImage}
                  alt={`${activeItem.title} - After Transformation`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none filter saturate-[0.98]"
                  referrerPolicy="no-referrer"
                />

                {/* AFTER Label Tag */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xs text-white text-[11px] uppercase tracking-[0.2em] font-semibold px-3 py-1 pointer-events-none border border-white/20">
                  After
                </div>

                {/* BEFORE Image (Clipped by slider position) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeItem.beforeImage}
                    alt={`${activeItem.title} - Before Transformation`}
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none filter saturate-[0.9] brightness-[0.96]"
                    style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  {/* BEFORE Label Tag */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[11px] uppercase tracking-[0.2em] font-semibold px-3 py-1 pointer-events-none border border-white/20">
                    Before
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#1C1917] shadow-xl flex items-center justify-center border-2 border-[#1C1917]">
                    <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#9D3D62]" />
                  </div>
                </div>

                {/* Touch hint prompt */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-xs text-white/90 text-[10px] uppercase tracking-[0.18em] px-3.5 py-1 pointer-events-none rounded-full flex items-center gap-1.5 border border-white/10">
                  <Sparkles className="w-3 h-3 text-[#E8B4C8]" />
                  <span>Drag or tap to compare</span>
                </div>
              </div>
            </div>

            {/* Transformation Story Detail (4 cols on desktop) */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9D3D62]">
                  {activeItem.category} Case Study
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-sm text-[#57534E] leading-relaxed">
                {activeItem.description}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#E7E2DA] text-xs">
                <div className="flex items-center justify-between text-[#78716C]">
                  <span className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#9D3D62]" />
                    Lead Stylist:
                  </span>
                  <span className="font-medium text-[#1C1917]">{activeItem.artist}</span>
                </div>

                <div className="flex items-center justify-between text-[#78716C]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9D3D62]" />
                    Session Time:
                  </span>
                  <span className="font-medium text-[#1C1917]">{activeItem.duration}</span>
                </div>
              </div>

              {/* Book transformation button */}
              <div className="pt-2">
                <button
                  onClick={() => onBookService(activeItem.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1917] hover:bg-[#9D3D62] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer"
                >
                  <span>Book This Transformation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Next/Prev Navigation */}
              <div className="flex items-center justify-between pt-1 text-xs text-[#78716C]">
                <button
                  onClick={() => {
                    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : transformations.length - 1));
                    setSliderPosition(50);
                  }}
                  className="inline-flex items-center gap-1 hover:text-[#9D3D62] cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span>
                  {currentIndex + 1} of {transformations.length}
                </span>

                <button
                  onClick={() => {
                    setCurrentIndex((prev) => (prev < transformations.length - 1 ? prev + 1 : 0));
                    setSliderPosition(50);
                  }}
                  className="inline-flex items-center gap-1 hover:text-[#9D3D62] cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
