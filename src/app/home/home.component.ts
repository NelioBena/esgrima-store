import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '@models/product.model';
import { ScannerComponent } from '../components/scanner/scanner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule, ScannerComponent],
})
export class HomeComponent {
  constructor(public cartService: CartService) {}

  products: Product[] = [
    {
      id: 1,
      name: 'Ahoy Sailor!',
      price: 20,
      quantity: 1,
      image: 'assets/Imagenes/Estampas/WAhoy.png',
    },
    {
      id: 2,
      name: 'Big Heart',
      price: 20,
      quantity: 1,
      image: 'assets/Imagenes/Estampas/WBigHeart.png',
    },
    {
      id: 3,
      name: 'My pool, my rules',
      price: 20,
      quantity: 1,
      image: 'assets/Imagenes/Estampas/Wsea.png',
    },
  ];

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  cartItemCount = computed(() => this.cartService.cartItems().length);

  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
