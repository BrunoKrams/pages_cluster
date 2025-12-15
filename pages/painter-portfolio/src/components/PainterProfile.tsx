import './PainterProfile.css';

interface PainterProfileProps {
  name: string;
  bio: string;
  image?: string;
}

const PainterProfile = ({ name, bio, image }: PainterProfileProps) => {
  return (
    <div className="painter-profile">
      {image && (
        <div className="painter-profile__image-container">
          <img 
            src={image} 
            alt={`${name} profile`} 
            className="painter-profile__image"
          />
        </div>
      )}
      <div className="painter-profile__content">
        <h2 className="painter-profile__name">{name}</h2>
        <p className="painter-profile__bio">{bio}</p>
      </div>
    </div>
  );
};

export default PainterProfile;
