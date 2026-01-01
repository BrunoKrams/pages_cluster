import { useState } from 'react';
import type { GalleryItemModel } from '../model/types';
import GalleryItem from './GalleryItem';
import './Gallery.css';

interface GalleryProps {
  galleryItems: GalleryItemModel[];
}

const Gallery = ({ galleryItems }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItemModel | null>(null);
  const handleImageClick = (galleryItem: GalleryItemModel) => {
    setSelectedImage(galleryItem);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__grid">
        {galleryItems.map((galleryItem) => (
          <GalleryItem
            key={galleryItem.id}
            title={galleryItem.title}
            artist={galleryItem.subtitle}
            imageUrl={galleryItem.imageUrl}
            description={galleryItem.description}
            onImageClick={() => handleImageClick(galleryItem)}
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
              alt={`${selectedImage.title} by ${selectedImage.subtitle}`}
              className="lightbox__image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
