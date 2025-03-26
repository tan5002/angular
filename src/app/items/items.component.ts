import { Component } from '@angular/core';
import Item from '../item/Item'

@Component({
  selector: 'app-items',
  standalone: false,
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  items : Item[] = [
    {id: 1, name: "John", description: "abc"},
    {id: 2, name: "Jane", description: "def"},
    {id: 3, name: "Jim", description: "ghi"},
    {id: 4, name: "Jill", description: "jkl"},
    {id: 5, name: "Jack", description: "mno"},
    {id: 6, name: "Jill", description: "pqr"},
    {id: 7, name: "Jane", description: "stu"},
    {id: 8, name: "Jim", description: "vwx"},
    {id: 9, name: "Jack", description: "yza"},
    {id: 10, name: "John", description: "bcd"}
  ];
}
