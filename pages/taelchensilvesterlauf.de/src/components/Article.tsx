import './Article.css';
import { } from 'react';

interface ArticleProps {
  title: string;
  content: string;
  image?: string;
}

const Article = ({ title, content, image }: ArticleProps) => {

  return (
    <div className="article">
      {image && (
        <div className="article__image-container">
          <img
            src={image}
            alt={`${title}`}
            className="article__image"
          />
        </div>
      )}
      <div className="article__content">
        <h2 className="article__title">{title}</h2>
        <p className="article__content">{content}</p>
      </div>

      
    </div>
  );
};

export default Article;
