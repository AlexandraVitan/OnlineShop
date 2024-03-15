import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { Perfume } from '../../shared/models/perfume';
import { CartItem } from '../../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(perfume: Perfume): void {
    let cartItem = this.cart.items.find(
      (item) => item.perfume.id === perfume.id
    );
    if (cartItem) {
      this.changeQuantity(perfume.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(perfume));
  }

  removeFromCart(perfumeId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.perfume.id != perfumeId
    );
  }

  changeQuantity(perfumeId: number, quantity: number) {
    let cartItem = this.cart.items.find(
      (item) => item.perfume.id === perfumeId
    );
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
  clearCart(): void {
    this.cart.items = [];
  }
}
