import { Component, Inject } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CartServiceClass } from './cart';
@Component({
  selector: 'app-cart-component',
  standalone: false,
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent {

   private cart: IProduct[] = [];
  constructor(private cartService:CartServiceClass ) { }

  ngOnInit() {
    this.cartService.getCart().subscribe({
      next: (cart: IProduct[]) => (this.cart = cart),
    });
  }

  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  removeFromCart(product: IProduct) {
    this.cartService.remove(product);
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
