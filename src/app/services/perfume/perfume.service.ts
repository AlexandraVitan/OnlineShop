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
      { name: 'All', count: 7 },
      { name: 'Floral', count: 2 },
      { name: 'Oriental', count: 6 },
      { name: 'Gourmand', count: 1 },
      { name: 'Powdery', count: 3 },
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
        price: 30,
        notes: ' Notes: vanilla and jasmine Flowers',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-1.jpg',
        tags: ['Floral', 'Powdery'],
        brand: 'Lancome',
      },
      {
        id: 2,
        name: 'Pure XS',
        price: 45,
        notes: 'Notes: Cotton,  iris and ambrette seeds',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-2.jpg',
        tags: ['Powdery'],
        brand: 'Guerlain',
      },
      {
        id: 3,
        name: 'Miss Dior',
        price: 50,
        notes: 'Notes: fruit, white cedar, wood bark.',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-3.jpg',
        tags: ['Floral'],
        brand: 'Guerlain',
      },
      {
        id: 4,
        name: 'Sahara',
        price: 25,
        notes: 'Notes: damascena and centifolia roses ',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-4.jpg',
        tags: ['Oriental', 'Gourmand'],
        brand: 'YSL',
      },
      {
        id: 5,
        name: 'Schalimar',
        price: 25,
        notes: 'Notes: tuberose , white flowers , jasmine and orange blossom.',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-5.jpg',
        tags: ['Powdery'],
        brand: 'Maison Asrar',
      },
      {
        id: 6,
        name: 'Killer Oud Revolution',
        price: 40,
        notes: 'Notes: Violet, rose, vanilla',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-6.jpg',
        tags: ['Oriental'],
        brand: 'YSL',
      },
      {
        id: 7,
        name: 'Killer Oud Ethic',
        price: 40,
        notes: 'Notes: Oud, vanilla, whiskey',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-7.jpg',
        tags: ['Oriental'],
        brand: 'YSL',
      },
      {
        id: 8,
        name: "You're Drugged",
        price: 45,
        notes: 'Notes: Coffee, whiskey',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-8.jpg',
        tags: ['Oriental', 'Gourmand'],
        brand: 'Maison Asrar',
      },
      {
        id: 9,
        name: 'Fireplace',
        price: 25,
        notes: 'Notes: Oud, oriental notes',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-9.jpg',
        tags: ['Oriental'],
        brand: 'Replica',
      },
      {
        id: 10,
        name: 'Taskeen',
        price: 20,
        notes: 'Notes: Peaches, red orange, cardamom',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-10.jpg',
        tags: ['Gourmand'],
        brand: 'Nylaa',
      },
      {
        id: 11,
        name: 'Noir Enchanté',
        price: 35,
        notes: 'Notes: Blackcurrant, musk, patchouli',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-11.jpg',
        tags: ['Floral', 'Woody'],
        brand: 'YSL',
      },
      {
        id: 12,
        name: 'Amber Bloom',
        price: 40,
        notes: 'Notes: Amber, sandalwood, vanilla',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-12.jpg',
        tags: ['Oriental', 'Woody'],
        brand: 'Dior',
      },
      {
        id: 13,
        name: 'Euphoria Mist',
        price: 45,
        notes: 'Notes: Water lily, pear, jasmine',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-13.jpg',
        tags: ['Aquatic', 'Floral'],
        brand: 'Gucci',
      },
      {
        id: 14,
        name: 'Velvet Rose',
        price: 30,
        notes: 'Notes: Bulgarian rose, oud, clove',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-14.jpg',
        tags: ['Floral', 'Oriental'],
        brand: 'Pariss',
      },
      {
        id: 15,
        name: 'Mystic Vanilla',
        price: 38,
        notes: 'Notes: Madagascar vanilla, tonka bean',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-15.jpg',
        tags: ['Gourmand', 'Sweet'],
        brand: 'Tom Ford',
      },
      {
        id: 16,
        name: 'Citrus Delight',
        price: 25,
        notes: 'Notes: Bergamot, lemon, neroli',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-16.jpg',
        tags: ['Citrus', 'Fresh'],
        brand: 'Tom Ford',
      },
      {
        id: 17,
        name: 'Midnight Musk',
        price: 50,
        notes: 'Notes: Musk, lavender, amber',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-17.jpg',
        tags: ['Woody', 'Musky'],
        brand: 'Guerlain',
      },
      {
        id: 18,
        name: 'Golden Oud',
        price: 60,
        notes: 'Notes: Oud, saffron, cedar',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-18.jpg',
        tags: ['Oriental', 'Woody'],
        brand: 'Guerlain',
      },
      {
        id: 19,
        name: 'Lavender Dreams',
        price: 28,
        notes: 'Notes: Lavender, vanilla, almond',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-19.jpg',
        tags: ['Floral', 'Sweet'],
        brand: 'Guerlain',
      },
      {
        id: 20,
        name: 'Tropical Breeze',
        price: 30,
        notes: 'Notes: Pineapple, coconut, lime',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-20.jpg',
        tags: ['Tropical', 'Fresh'],
        brand: 'Geryan',
      },
      {
        id: 21,
        name: 'Crimson Spice',
        price: 55,
        notes: 'Notes: Cinnamon, clove, black pepper',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-21.jpg',
        tags: ['Spicy', 'Oriental'],
        brand: 'Dior',
      },
      {
        id: 22,
        name: 'Emerald Forest',
        price: 35,
        notes: 'Notes: Pine, moss, cedarwood',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-22.jpg',
        tags: ['Woody', 'Fresh'],
        brand: 'Geryan',
      },
      {
        id: 23,
        name: 'Blush Peony',
        price: 30,
        notes: 'Notes: Peony, rose, white musk',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-23.jpg',
        tags: ['Floral', 'Powdery'],
        brand: 'Lancome',
      },
      {
        id: 24,
        name: 'Ocean Whisper',
        price: 45,
        notes: 'Notes: Sea salt, driftwood, jasmine',
        favorite: false,
        imageUrl: '/assets/images/perfumes/perfume-24.jpg',
        tags: ['Aquatic', 'Fresh'],
        brand: 'Lancome',
      },
      {
        id: 25,
        name: 'Desert Amber',
        price: 50,
        notes: 'Notes: Amber, labdanum, myrrh',
        favorite: true,
        imageUrl: '/assets/images/perfumes/perfume-25.jpg',
        tags: ['Oriental', 'Resinous'],
        brand: 'Lancome',
      },
    ];
  }
}
