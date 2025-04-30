import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  async getProductById(id: string): Promise<Product | undefined> {
    try {
      // Aquí deberías hacer tu llamada a la API
      // Por ahora, simulamos una respuesta
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      return undefined;
    }
  }
}