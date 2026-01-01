import type { Painter } from './painter';
import type { Painting } from './painting';

import alex from '../assets/images/alex.jpg';
import markus from '../assets/images/markus.jpg';

import ballons from '../../src/assets/images/markus/ballons.jpg';
import blick_ueber_niedermennig from '../../src/assets/images/markus/blick_ueber_niedermennig.jpg';
import bild_1 from '../../src/assets/images/alex/1.jpg';
import bild_2 from '../../src/assets/images/alex/2.jpg';


export const painters: Painter[] = [
  {
    id: '1',
    name: 'Alexandra',
    bio: 'Alexandra ist eine zeitgenössische abstrakte Künstlerin und Kunsttherapeutin, bekannt für ihren lebendigen Einsatz von Farben und dynamischen Kompositionen. Mit über 15 Jahren Erfahrung erforscht ihre Arbeit die Schnittstelle von Emotion und Form und schafft Werke, die beim Betrachter auf einer tief persönlichen Ebene resonieren.',
    profileImage: alex
  },
  {
    id: '2',
    name: 'Markus',
    bio: 'Markus ist Mathematiker und Softwareentwickler und spezialisiert sich in seiner künstlerischen Arbeit auf Landschafts- und Naturmalerei. Er fängt die ruhige Schönheit der natürlichen Welt ein. Sein realistischer Stil und seine Liebe zum Detail erwecken Szenen zum Leben und laden die Betrachter ein, die Ruhe und Majestät unberührter Landschaften zu erleben.',
    profileImage: markus
  }
];

export const paintings: Painting[] = [
  {
    id: '1',
    title: 'Ballons',
    artistId: '2',
    artistName: 'Markus',
    imageUrl: ballons,
    description: 'Ein explosives abstraktes Werk mit kräftigen Rot- und Orangetönen, das Leidenschaft und Energie hervorruft.'
  },
  {
    id: '2',
    title: 'Bild 1',
    artistId: '1',
    artistName: 'Alex',
    imageUrl: bild_1,
    description: 'Eine atemberaubende Landschaft mit schneebedeckten Gipfeln unter einem klaren Morgenhimmel.'
  },
  {
    id: '3',
    title: 'Blick über Niedermennig',
    artistId: '2',
    artistName: 'Markus',
    imageUrl: blick_ueber_niedermennig,
    description: 'Eine beruhigende abstrakte Komposition mit fließenden Blautönen und subtilen Texturen.'
  },
  {
    id: '4',
    title: 'Bild 2',
    artistId: '1',
    artistName: 'Alex',
    imageUrl: bild_2,
    description: 'Ein lebendiges Stadtbild bei Sonnenuntergang mit warmen, einladenden Farben.'
  }
];
