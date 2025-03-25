import { Component } from '@angular/core';
import Product from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular';
  products = [
    {
      id: 1,
      name : "orange",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/800px-Ambersweet_oranges.jpg",
      price: 100,
      description: "rất ngon",
      quantity: 1
    },
    {
      id: 2,
      name : "orange",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/800px-Ambersweet_oranges.jpg",
      price: 100,
      description: "rất ngon",
      quantity: 1
    },
    {
      id: 3,
      name : "orange",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/800px-Ambersweet_oranges.jpg",
      price: 100,
      description: "rất ngon",
      quantity: 1
    },
    {
      id: 4,
      name : "orange",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/800px-Ambersweet_oranges.jpg",
      price: 100,
      description: "rất ngon",
      quantity: 1
    },
  ]
  total: number = 0;
  onQuantityChange(updateProduct: Product) {
    this.products = this.products.map((p) =>
      p.id === updateProduct.id ? { ...p, quantity: updateProduct.quantity } : p
    );
  
    this.total = this.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }
  
  
}
