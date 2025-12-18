import type { Painter, Painting } from '../types';

export const painters: Painter[] = [
  {
    id: '1',
    name: 'Alexandra',
    bio: 'Alexandra ist eine zeitgenössische abstrakte Künstlerin und Kunsttherapeutin, bekannt für ihren lebendigen Einsatz von Farben und dynamischen Kompositionen. Mit über 15 Jahren Erfahrung erforscht ihre Arbeit die Schnittstelle von Emotion und Form und schafft Werke, die beim Betrachter auf einer tief persönlichen Ebene resonieren.',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'Markus',
    bio: 'Markus ist Mathematiker und Softwareentwickler und spezialisiert sich in seiner künstlerischen Arbeit auf Landschafts- und Naturmalerei. Er fängt die ruhige Schönheit der natürlichen Welt ein. Sein realistischer Stil und seine Liebe zum Detail erwecken Szenen zum Leben und laden die Betrachter ein, die Ruhe und Majestät unberührter Landschaften zu erleben.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  }
];

export const paintings: Painting[] = [
  {
    id: '1',
    title: 'Crimson Dreams',
    artistId: '1',
    artistName: 'Alexandra',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
    description: 'Ein explosives abstraktes Werk mit kräftigen Rot- und Orangetönen, das Leidenschaft und Energie hervorruft.'
  },
  {
    id: '2',
    title: 'Whispers of Blue',
    artistId: '1',
    artistName: 'Alexandra',
    imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop',
    description: 'Eine beruhigende abstrakte Komposition mit fließenden Blautönen und subtilen Texturen.'
  },
  {
    id: '3',
    title: 'Mountain Solitude',
    artistId: '2',
    artistName: 'Markus',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description: 'Eine atemberaubende Landschaft mit schneebedeckten Gipfeln unter einem klaren Morgenhimmel.'
  },
  {
    id: '4',
    title: 'Forest Path',
    artistId: '2',
    artistName: 'Markus',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    description: 'Eine friedliche Waldszene mit geflecktem Sonnenlicht, das durch alte Bäume fällt.'
  }
];
