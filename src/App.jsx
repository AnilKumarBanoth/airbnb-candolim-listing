import React, { useState } from 'react';
import Header from './components/Header';
import ListingHeader from './components/ListingHeader';
import HeroGallery from './components/HeroGallery';
import LeftDetails from './components/LeftDetails';
import BookingCard from './components/BookingCard';
import PhotoTourModal from './components/PhotoTourModal';
import LightboxModal from './components/LightboxModal';
import AmenitiesModal from './components/AmenitiesModal';
import ShareModal from './components/ShareModal';
import Footer from './components/Footer';
import { listingData, allGalleryPhotos } from './data/listingData';

export default function App() {
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen]   = useState(false);
  const [lightboxIdx, setLightboxIdx]     = useState(0);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [shareOpen, setShareOpen]         = useState(false);
  const [isSaved, setIsSaved]             = useState(() => localStorage.getItem('airbnb_saved_ug10') === 'true');
  const [checkIn, setCheckIn]   = useState('10/10/2026');
  const [checkOut, setCheckOut] = useState('15/10/2026');
  const [guests, setGuests]     = useState({ adults: 2, children: 0, infants: 0 });

  const toggleSave = () => {
    setIsSaved(v => {
      localStorage.setItem('airbnb_saved_ug10', String(!v));
      return !v;
    });
  };

  const openLightboxFromHero = (heroIdx) => {
    const hero  = listingData.heroPhotos[heroIdx];
    const match = allGalleryPhotos.findIndex(p => p.url === hero?.url);
    setLightboxIdx(match >= 0 ? match : 0);
    setLightboxOpen(true);
  };

  const openLightboxFromTour = (photo) => {
    const match = allGalleryPhotos.findIndex(p => p.id === photo?.id || p.url === photo?.url);
    setLightboxIdx(match >= 0 ? match : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onSearchClick={() => window.scrollTo({ top: 280, behavior: 'smooth' })} />

      {/* ─── Centered page wrapper ─────────────────────────── */}
      <main className="flex-1 w-full">
        {/* Content constrained and centered */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

          <ListingHeader
            title={listingData.title}
            rating={listingData.rating}
            reviewCount={listingData.reviewCount}
            isSuperhost={listingData.isSuperhost}
            location={listingData.location}
            onShareClick={() => setShareOpen(true)}
            isSaved={isSaved}
            onSaveToggle={toggleSave}
          />

          <HeroGallery
            heroPhotos={listingData.heroPhotos}
            onOpenPhotoTour={() => setPhotoTourOpen(true)}
            onOpenLightbox={openLightboxFromHero}
          />

          {/* ─── Main Two-Column Layout ─────────────────────── */}
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 pb-16 items-start mt-2">

            {/* Left column — takes up remaining space */}
            <div className="flex-1 min-w-0 xl:max-w-[680px]">
              <LeftDetails
                listingData={listingData}
                onOpenAmenitiesModal={() => setAmenitiesOpen(true)}
              />
            </div>

            {/* Right column — fixed width booking card */}
            <div className="w-full xl:w-[380px] shrink-0">
              <BookingCard
                listingData={listingData}
                checkInDate={checkIn}
                setCheckInDate={setCheckIn}
                checkOutDate={checkOut}
                setCheckOutDate={setCheckOut}
                guests={guests}
                setGuests={setGuests}
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* ─── Modals ─────────────────────────────────────────── */}
      <PhotoTourModal
        isOpen={photoTourOpen}
        onClose={() => setPhotoTourOpen(false)}
        categories={listingData.categories}
        onPhotoClick={openLightboxFromTour}
        onShareClick={() => setShareOpen(true)}
        isSaved={isSaved}
        onSaveToggle={toggleSave}
      />
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        photos={allGalleryPhotos}
        currentIndex={lightboxIdx}
        setCurrentIndex={setLightboxIdx}
        onShareClick={() => setShareOpen(true)}
        isSaved={isSaved}
        onSaveToggle={toggleSave}
      />
      <AmenitiesModal
        isOpen={amenitiesOpen}
        onClose={() => setAmenitiesOpen(false)}
        amenities={listingData.amenities}
      />
      <ShareModal
        isOpen={shareOpen}
        onClose={() => setShareOpen(false)}
        listingData={listingData}
      />
    </div>
  );
}
