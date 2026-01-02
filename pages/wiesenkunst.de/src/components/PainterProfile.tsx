import type { Painter } from '../data/painter';
import './PainterProfile.css';


const PainterProfile = ({ painter }: { painter: Painter }) => {
  return (
    <div className="painter-profile">
      {painter.profileImage && (
        <div className="painter-profile__image-container">
          <img 
            src={painter.profileImage} 
            alt={`${painter.name} profile`} 
            className="painter-profile__image"
          />
        </div>
      )}
      <div className="painter-profile__content">
        <h2 className="painter-profile__name">{painter.name}</h2>
        <p className="painter-profile__bio">{painter.bio}</p>
      </div>
    </div>
  );
};

export default PainterProfile;
