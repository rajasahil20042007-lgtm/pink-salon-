import React, { useState } from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { SALON_DATA, ServiceItem } from '../data/salonConfig';

interface ServiceMenuProps {
  onBookService: (serviceName: string) => void;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'HAIR' | 'COLOR' | 'SKIN' | 'MAKEUP' | 'NAILS'>('HAIR');

  const categories: Array<'ALL' | 'HAIR' | 'COLOR' | 'SKIN' | 'MAKEUP' | 'NAILS'> = [
    'HAIR',
    'COLOR',
    'SKIN',
    'MAKEUP',
    'NAILS'
  ];

  const displayedServices = activeCategory === 'ALL'
    ? SALON_DATA.services
    : SALON_DATA.services.filter((s) => s.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E7E2DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
            TRANSPARENT TARIFF
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
            THE MENU
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Refined salon treatments with inclusive wash, blowouts and customized care.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                  : 'bg-[#FAF8F5] text-[#57534E] border-[#D6CCC2] hover:border-[#9D3D62] hover:text-[#9D3D62]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Menu List Layout (Not a generic pricing table) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
          {displayedServices.map((item) => (
            <div
              key={item.id}
              className="group border-b border-[#E7E2DA] pb-6 flex flex-col justify-between text-left space-y-2 hover:border-[#9D3D62]/60 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="space-y-0.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917] group-hover:text-[#9D3D62] transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#78716C]">
                    <span className="font-medium text-[#9D3D62]">{item.included}</span>
                    <span aria-hidden="true">•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-serif text-2xl font-medium text-[#1C1917] tabular-nums">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Description & Action */}
              <div className="flex items-center justify-between pt-1">
                <p className="text-xs text-[#78716C] leading-relaxed max-w-sm line-clamp-2">
                  {item.description}
                </p>

                <button
                  onClick={() => onBookService(item.name)}
                  className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] font-semibold text-[#1C1917] group-hover:text-[#9D3D62] cursor-pointer hover:underline shrink-0 ml-4"
                >
                  <span>Book</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Note on consultation */}
        <div className="mt-14 p-5 bg-[#F5EFE6]/60 border border-[#E7E2DA] text-center max-w-xl mx-auto">
          <p className="text-xs text-[#57534E] leading-relaxed">
            * All hair coloring, bridal and extension services begin with a complimentary stylist consultation to determine hair texture, density and tone requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
