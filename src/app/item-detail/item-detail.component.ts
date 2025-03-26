import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  standalone: false,
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  id = input.required<number>();
}
