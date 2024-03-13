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
        name: 'Pizza Pepperoni',
        price: 10,
        favorite: false,
        stars: 4.5,
        imageUrl: '/assets/images/perfumes/perfume-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        favorite: true,
        stars: 4.7,
        imageUrl: '/assets/images/perfumes/perfume-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        favorite: false,
        stars: 3.5,
        imageUrl: '/assets/images/perfumes/perfume-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        favorite: true,
        stars: 3.3,
        imageUrl: '/assets/images/perfumes/perfume-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        favorite: false,
        stars: 3.0,
        imageUrl: '/assets/images/perfumes/perfume-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
    ];
  }
}
