import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Output() editItem = new EventEmitter<Item>();
  @Output() deleteItem = new EventEmitter<Item>();
  @Input() item: Item = {
    price: 0, name: '',
    id: 0
  };

  isEditing = false;

  ngOnInit() {
    this.item = { ...this.item };
  }

  startEdit() {
    if(!this.isEditing){
      this.isEditing = true;
    }
  }

  endEdit(event: any) {
    this.editItem.emit(event);
    this.isEditing = false;
  }

  onRemove() {
    this.deleteItem.emit(this.item);
  }
}
