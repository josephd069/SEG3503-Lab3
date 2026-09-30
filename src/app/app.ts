import { Component } from '@angular/core';
import { ShoppingInput } from './shopping-input/shopping-input';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [
    ShoppingInput,
    ShoppingList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

}