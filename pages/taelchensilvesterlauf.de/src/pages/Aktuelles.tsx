import Article from '../components/Article';
import { articles } from '../model/data/data';

export default function Aktuelles() {
  const latest = articles[0];
  return (
    <section className="articles-section" aria-labelledby="aktuelles-title">
      {latest && (
        <Article
          key={latest.id}
          title={latest.title}
          content={latest.content}
          image={latest.image}
        />
      )}
    </section>
  );
}
