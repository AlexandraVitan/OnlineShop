import { Perfume } from './perfume';

export class CartItem {
  constructor(perfume: Perfume) {
    this.perfume = perfume;
  }
  perfume: Perfume;
  quantity: number = 1;

  get price(): number {
    return this.perfume.price * this.quantity;
  }
}
