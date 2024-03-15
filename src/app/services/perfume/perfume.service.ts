import { Injectable } from '@angular/core';
import { Perfume } from '../../shared/models/perfume';
import { Tag } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class PerfumeService {
  constructor() {}

  getPerfumeById(id: number): Perfume {
    return this.getAll().find((perfume) => perfume.id == id)!;
  }

  getAllPerfumesBySearchTerm(searchTerm: string): Perfume[] {
    return this.getAll().filter((perfume) =>
      perfume.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Floral', count: 4 },
      { name: 'Oriental', count: 2 },
      { name: 'Gourmand', count: 3 },
      { name: 'Powdery', count: 2 },
      // { name: 'Hamburger', count: 1 },
      // { name: 'Fry', count: 1 },
      // { name: 'Soup', count: 1 },
    ];
  }

  getAllPerfumesByTag(tag: string): Perfume[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((perfume) => perfume.tags?.includes(tag));
  }

  getAll(): Perfume[] {
    return [
      {
        id: 1,
        name: 'La vie est belle',
        price: 10,
        description:
          'Subtile dance of flowers which open the way to deep layers of vanilla and jasmine',
        favorite: false,
        stars: 4.5,
        imageUrl: '/assets/images/perfumes/perfume-1.jpg',
        tags: ['Floral', 'Powdery'],
      },
      {
        id: 2,
        name: 'Pure XS',
        price: 20,
        description:
          'Cotton and light as they are soft and moist, highlighted with iris and ambrette seeds.',
        favorite: true,
        stars: 4.7,
        imageUrl: '/assets/images/perfumes/perfume-2.jpg',
        tags: ['Powdery'],
      },
      {
        id: 3,
        name: 'Miss Dior',
        price: 5,
        description:
          'The flavour of the fruit cedes centre stage, and white cedar underscores the woody strength of the tree and its bark.',
        favorite: false,
        stars: 3.5,
        imageUrl: '/assets/images/perfumes/perfume-3.jpg',
        tags: ['Floral'],
      },
      {
        id: 4,
        name: 'Sahara',
        price: 2,
        description:
          'Within the bottle, absolute and extract of damascena and centifolia roses, contribute their full intensity. ',
        favorite: true,
        stars: 3.3,
        imageUrl: '/assets/images/perfumes/perfume-4.jpg',
        tags: ['Oriental', 'Gourmand'],
      },
      {
        id: 5,
        name: 'Schalimar',
        price: 11,
        description:
          'A tuberose whose scent brings to mind the twilight hour, when the white flowers stand out in the darkness. Notes of jasmine and orange blossom.',
        favorite: false,
        stars: 3.0,
        imageUrl: '/assets/images/perfumes/perfume-5.jpg',
        tags: ['Powdery'],
      },
    ];
  }
}
