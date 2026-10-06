import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { AboutSection } from './sections/AboutSection';
import { SignatureServices } from './sections/SignatureServices';
import { FeaturedExperience } from './sections/FeaturedExperience';
import { TransformationSection } from './sections/TransformationSection';
import { StatsSection } from './sections/StatsSection';
import { GallerySection } from './sections/GallerySection';
import { TeamSection } from './sections/TeamSection';
import { ServiceMenu } from './sections/ServiceMenu';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { BookingSection } from './sections/BookingSection';
import { LocationSection } from './sections/LocationSection';
import { AdminSection } from './sections/AdminSection';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppCta } from './components/WhatsAppCta';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-sans">
      {/* Fixed Luxury Navigation */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* 2. About Section: "More Than A Salon." */}
        <AboutSection onOpenBooking={() => scrollToBooking()} />

        {/* 3. Signature Services: 6 Real Indian Salon Services */}
        <SignatureServices onBookService={(service) => scrollToBooking(service)} />

        {/* 4. Featured Experience: "THE PINK SIGNATURE" */}
        <FeaturedExperience onOpenBooking={(service) => scrollToBooking(service)} />

        {/* 5. Transformation Section: Interactive Before/After Comparison Slider */}
        <TransformationSection onBookService={(service) => scrollToBooking(service)} />

        {/* 6. Gallery: Editorial Lookbook with Lightbox */}
        <GallerySection />

        {/* 7. Artists & Team: Professional Indian Beauty Specialists */}
        <TeamSection onBookWithArtist={(artist) => scrollToBooking(`Consultation with ${artist}`)} />

        {/* 8. Trust Statistics: Compact Premium Stat Strip */}
        <StatsSection />

        {/* 9. Complete Service Menu / Pricing */}
        <ServiceMenu onBookService={(service) => scrollToBooking(service)} />

        {/* 10. Client Testimonials */}
        <TestimonialsSection />

        {/* 11. Appointment Booking: Form with Validation & Feedback */}
        <BookingSection
          preselectedService={selectedServiceForBooking}
          onClearPreselected={() => setSelectedServiceForBooking(undefined)}
        />

        {/* 12. Location & Visiting Information */}
        <LocationSection />

        {/* 13. Single Dedicated Admin Section for all Appointment Requests */}
        <AdminSection />

        {/* 14. Final CTA: "Your Best Look Starts Here." */}
        <FinalCta onOpenBooking={() => scrollToBooking()} />
      </main>

      {/* 15. Luxury Editorial Footer */}
      <Footer />

      {/* 16. WhatsApp Floating & Mobile CTA Bar */}
      <WhatsAppCta onOpenBooking={() => scrollToBooking()} />
    </div>
  );
}
