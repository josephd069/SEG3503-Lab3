import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-input',
  imports: [FormsModule],
  templateUrl: './shopping-input.html',
  styleUrl: './shopping-input.css'
})
export class ShoppingInput {

  item: string = '';

  @Output() addItem = new EventEmitter<string>();

  add(): void {
    if (this.item.trim() !== '') {
      this.addItem.emit(this.item);
      this.item = '';
    }
  }
}