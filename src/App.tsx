import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndDirections } from './components/LocationAndDirections';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { InquiryModal } from './components/InquiryModal';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (service?: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-neutral-100 flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Portfolio Gallery Section */}
        <PortfolioSection />

        {/* Services & Deliverables Section */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* About & Craft Spotlight Section */}
        <AboutSection />

        {/* 4-Step Wedding Experience Timeline */}
        <ExperienceTimeline />

        {/* Verified Reviews & Ratings */}
        <ReviewsSection />

        {/* Studio Location & Interactive Google Maps with Directions */}
        <LocationAndDirections />

        {/* Contact & Consultation CTA Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <FloatingActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking & Quote Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
};

export default App;
