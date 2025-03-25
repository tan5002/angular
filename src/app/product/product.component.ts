import { Component,input,output,signal } from '@angular/core';
import Product from './product';
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = input.required<Product>();
  handleClick(message: string){
    alert("Buy Now: "+ message);
  }
  quantityChanged = output<Product>();
  handleQuantityChange(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.product().quantity = parseInt(inputElement.value);

    this.quantityChanged.emit(this.product());
  }
}
