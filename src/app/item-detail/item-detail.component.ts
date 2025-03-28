import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Item from '../item/Item';

@Component({
  selector: 'app-item-detail',
  standalone: false,
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  items : Item[] = [
    {id: 1, name: "John", description: "abc",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 2, name: "Jane", description: "def",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 3, name: "Jim", description: "ghi",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 4, name: "Jill", description: "jkl",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 5, name: "Jack", description: "mno",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 6, name: "Jill", description: "pqr",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 7, name: "Jane", description: "stu",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 8, name: "Jim", description: "vwx",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 9, name: "Jack", description: "yza",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20},
    {id: 10, name: "John", description: "bcd",image: "https://plus.unsplash.com/premium_photo-1742945845688-d2e666a3b92a?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: 20}
  ];
  item: any;
  itemId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Lấy id từ URL
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));

    // Tìm item theo id
    this.item = this.items.find(i => i.id === this.itemId);
  }
}
