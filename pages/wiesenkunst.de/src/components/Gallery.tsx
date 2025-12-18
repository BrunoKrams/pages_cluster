import { useState } from 'react';
import type { Painting } from '../types';
import GalleryItem from './GalleryItem';
import './Gallery.css';

interface GalleryProps {
  paintings: Painting[];
}

const Gallery = ({ paintings }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Painting | null>(null);

  const handleImageClick = (painting: Painting) => {
    setSelectedImage(painting);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery">
      <h2 className="gallery__title">Gallery</h2>
      <div className="gallery__grid">
        {paintings.map((painting) => (
          <GalleryItem
            key={painting.id}
            title={painting.title}
            artist={painting.artistName}
            imageUrl={painting.imageUrl}
            description={painting.description}
            onImageClick={() => handleImageClick(painting)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={handleCloseLightbox}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={handleCloseLightbox}>
              ×
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={`${selectedImage.title} by ${selectedImage.artistName}`}
              className="lightbox__image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
