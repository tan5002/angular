import { Component, input } from '@angular/core';
import Item from './Item'
@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  item = input.required<Item>();
}
