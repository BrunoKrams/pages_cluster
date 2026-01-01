import type { ArticleModel, GalleryItemModel } from '../types';
import { captions2025 } from './captions-2025';
import flyer from '../images/flyer.jpeg';
import vorher2024 from '../images/2024/2024_vorher.jpeg';
import nachher2024 from '../images/2024/2024_nachher.jpeg';
import vorher2023 from '../images/2023/2023_vorher.jpeg';
import nachher2023 from '../images/2023/2023_nachher.jpeg';
// Auto-import all images in 2025 folder
const images2025 = import.meta.glob('../images/2025/*.{png,jpg,jpeg,gif,webp}', {
  eager: true,
  as: 'url'
}) as Record<string, string>;

export const articles: ArticleModel[] = [
  {
    id: '1',
    title: 'Ankündigung',
    content: 'Am 31. Dezember 2025 startet die dritte Auflage des Tälchen Silvesterlaufs.',
    image: flyer,
  }
];

// Build Gallery items from 2025 images
const humanize2025Title = (base: string): string => {
  // Example filenames: "WhatsApp Image 2025-12-31 at 11.04.31 (1)" or without index
  const m = base.match(/^WhatsApp Image (\d{4}-\d{2}-\d{2}) at (\d{2})\.(\d{2})\.(\d{2})(?: \((\d+)\))?$/);
  if (m) {
    const [, , hh, mm, ss, idx] = m;
    return `Silvesterlauf Moment ${hh}:${mm}:${ss}${idx ? ` (${idx})` : ''}`;
  }
  // Fallback: prettify generic names
  const pretty = base
    .replace(/[._-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return pretty ? pretty : 'Silvesterlauf 2025';
};
const galleryItems2025: GalleryItemModel[] = Object.entries(images2025)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url]) => {
    const file = path.split('/').pop() || 'image';
    const base = file.replace(/\.[^.]+$/, '');
    const title = captions2025[base] ?? humanize2025Title(base);
    if (import.meta.env && (import.meta as any).env.DEV && !captions2025[base]) {
      // eslint-disable-next-line no-console
      console.warn('Missing 2025 caption for', base, '→ using fallback:', title);
    }
    return {
      id: `2025-${base}`,
      title,
      subtitle: '2025',
      imageUrl: url,
    } as GalleryItemModel;
  });

export const galleryItems: GalleryItemModel[] = [
  {
    id: '1',
    title: 'Vorher',
    subtitle: '2024',
    imageUrl: vorher2024,
    description:
      'Vor dem Lauf. Die stille Erwartung eines besonderen Lauferlebnisses, das Körper und Geist herausfordert.',
  },
  {
    id: '2',
    title: 'Nachher',
    subtitle: '2024',
    imageUrl: nachher2024,
    description:
      'Erschöpft aber zufrieden. Ein Lauf durch winterliche Landschaften, der den Geist erfrischt und die Seele belebt.',
  },
  {
    id: '3',
    title: 'Vorher',
    subtitle: '2023',
    imageUrl: vorher2023,
    description:
      'Da waren sie noch Freunde: Die Favoriten Matthias und Svenja vor dem Skandalrennen 2023.',
  },
  {
    id: '4',
    title: 'Nachher',
    subtitle: '2023',
    imageUrl: nachher2023,
    description: 'Life on the fast lane: Sebastian.',
  },
  ...galleryItems2025,
];
