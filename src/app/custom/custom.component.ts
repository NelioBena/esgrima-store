import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  scrollCarousel(direction: 'left' | 'right') {
    const container = this.carouselContainer.nativeElement;
    const scrollAmount = 200;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  }

  images = [
    {
      thumb: 'assets/Imagenes/carousel/sea.png',
      full: 'assets/Imagenes/carousel/sea.png',
    },
    {
      thumb: 'assets/Imagenes/carousel/Ahoy!.png',
      full: 'assets/Imagenes/carousel/Ahoy!.png',
    },
    {
      thumb: 'assets/Imagenes/carousel/Ask.png',
      full: 'assets/Imagenes/carousel/Ask.png',
    },
    {
      thumb: 'assets/Imagenes/carousel/Beach.png',
      full: 'assets/Imagenes/carousel/Beach.png',
    },
    {
      thumb: 'assets/Imagenes/carousel/BigHeart.png',
      full: 'assets/Imagenes/carousel/BigHeart.png',
    },
    {
      thumb: 'assets/Imagenes/carousel/Chosen.png',
      full: 'assets/Imagenes/carousel/Chosen.png',
    },
    {
      thumb: 'assets/Imagenes/carousel/Drink.png',
      full: 'assets/Imagenes/carousel/Drink.png',
    },
  ];

  selectedImage: { thumb: string; full: string } | null = null;
  selectedProduct: { name: string; image: string } | null = null;

  products = {
    tshirt: {
      name: 'T-Shirt',
      image: 'assets/Imagenes/basicos/Remera/remeraBlanca.png',
    },
    bag: {
      name: 'Tote Bag',
      image: 'assets/Imagenes/basicos/Tote/bag1.png',
    },
  };

  selectImage(image: { thumb: string; full: string }) {
    this.selectedImage = image;
    this.updatePreview();
  }

  selectProduct(productType: 'tshirt' | 'bag') {
    this.selectedProduct = this.products[productType];
    this.updatePreview();
  }

  updatePreview() {
    console.log('Updating preview with:', {
      product: this.selectedProduct,
      design: this.selectedImage,
    });
  }
}
