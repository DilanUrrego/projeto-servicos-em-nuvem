import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsService, Item } from '../../services/items';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];
  newName = '';
  newQuantity = 1;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemsService.getItems().subscribe((items) => (this.items = items));
  }

  addItem() {
    if (!this.newName.trim()) return;
    this.itemsService
      .addItem({ name: this.newName, quantity: this.newQuantity })
      .subscribe(() => {
        this.newName = '';
        this.newQuantity = 1;
        this.loadItems();
      });
  }
}