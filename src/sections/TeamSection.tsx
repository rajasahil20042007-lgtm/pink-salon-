import React from 'react';
import { Award, ArrowUpRight } from 'lucide-react';
import { SALON_DATA } from '../data/salonConfig';

interface TeamSectionProps {
  onBookWithArtist: (artistName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onBookWithArtist }) => {
  const team = SALON_DATA.team;

  return (
    <section id="artists" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9D3D62]">
            MASTERY & CONSULTATION
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1C1917]">
            MEET THE ARTISTS
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-normal max-w-lg mx-auto">
            Experienced Indian beauty specialists with editorial experience, dedication to hair health, and attentive consultations.
          </p>
        </div>

        {/* 4-Card Artist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group bg-[#FAF8F5] border border-[#E7E2DA] hover:border-[#9D3D62]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#9D3D62]/5 flex flex-col justify-between text-left"
            >
              {/* Portrait Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE8E0] border-b border-[#E7E2DA]">
                <img
                  src={member.image}
                  width={400}
                  height={500}
                  alt={`${member.name} - ${member.role} at Pink Salon`}
                  className="w-full h-full object-cover object-top filter saturate-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Experience Badge */}
                <div className="absolute top-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#1C1917] border border-[#E7E2DA]">
                  {member.experience}
                </div>
              </div>

              {/* Artist Meta & Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl font-medium text-[#1C1917] group-hover:text-[#9D3D62] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#9D3D62] tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#78716C] leading-relaxed pt-1">
                    Specializing in: <span className="text-[#44403C] font-medium">{member.specialty}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFECE6]">
                  <button
                    onClick={() => onBookWithArtist(member.name)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs uppercase tracking-[0.16em] font-medium text-[#1C1917] group-hover:text-[#9D3D62] hover:underline cursor-pointer transition-colors"
                  >
                    <span>Request with {member.name.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
