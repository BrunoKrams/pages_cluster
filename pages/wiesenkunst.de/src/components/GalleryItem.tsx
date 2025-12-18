import { useState } from 'react';
import './GalleryItem.css';

interface GalleryItemProps {
  title: string;
  artist: string;
  imageUrl: string;
  description?: string;
  onImageClick: () => void;
}

const GalleryItem = ({ title, artist, imageUrl, description, onImageClick }: GalleryItemProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="gallery-item">
      <div className="gallery-item__image-container" onClick={onImageClick}>
        {imageError ? (
          <div className="gallery-item__placeholder">
            <span className="gallery-item__placeholder-icon">🖼️</span>
            <span className="gallery-item__placeholder-text">Image unavailable</span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={`${title} by ${artist}`}
            className="gallery-item__image"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="gallery-item__info">
        <h3 className="gallery-item__title">{title}</h3>
        <p className="gallery-item__artist">{artist}</p>
        {description && (
          <p className="gallery-item__description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
