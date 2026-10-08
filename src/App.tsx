import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { AboutSection } from './sections/AboutSection';
import { SignatureServices } from './sections/SignatureServices';
import { FeaturedExperience } from './sections/FeaturedExperience';
import { WhatsAppCta } from './components/WhatsAppCta';

// Code-split below-the-fold sections to minimize initial JavaScript bundle & TBT
const TransformationSection = lazy(() =>
  import('./sections/TransformationSection').then((m) => ({ default: m.TransformationSection }))
);
const GallerySection = lazy(() =>
  import('./sections/GallerySection').then((m) => ({ default: m.GallerySection }))
);
const TeamSection = lazy(() =>
  import('./sections/TeamSection').then((m) => ({ default: m.TeamSection }))
);
const StatsSection = lazy(() =>
  import('./sections/StatsSection').then((m) => ({ default: m.StatsSection }))
);
const ServiceMenu = lazy(() =>
  import('./sections/ServiceMenu').then((m) => ({ default: m.ServiceMenu }))
);
const TestimonialsSection = lazy(() =>
  import('./sections/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection }))
);
const BookingSection = lazy(() =>
  import('./sections/BookingSection').then((m) => ({ default: m.BookingSection }))
);
const LocationSection = lazy(() =>
  import('./sections/LocationSection').then((m) => ({ default: m.LocationSection }))
);
const AdminSection = lazy(() =>
  import('./sections/AdminSection').then((m) => ({ default: m.AdminSection }))
);
const FinalCta = lazy(() =>
  import('./sections/FinalCta').then((m) => ({ default: m.FinalCta }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);

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
        {/* 1. Critical Above-the-Fold: Hero Section */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* 2. Critical Immediate Section: About "More Than A Salon." */}
        <AboutSection onOpenBooking={() => scrollToBooking()} />

        {/* 3. Core Services: Signature Services */}
        <SignatureServices onBookService={(service) => scrollToBooking(service)} />

        {/* 4. Core Ritual: Featured Experience */}
        <FeaturedExperience onOpenBooking={(service) => scrollToBooking(service)} />

        {/* Below-the-fold code-split sections with graceful zero-shift suspense */}
        <Suspense fallback={<div className="py-12 bg-transparent" />}>
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
        </Suspense>
      </main>

      {/* 15. Luxury Editorial Footer */}
      <Suspense fallback={<footer className="h-24 bg-[#141210]" />}>
        <Footer />
      </Suspense>

      {/* 16. WhatsApp Floating & Mobile CTA Bar */}
      <WhatsAppCta onOpenBooking={() => scrollToBooking()} />
    </div>
  );
}
