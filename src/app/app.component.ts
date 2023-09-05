import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-card';

  itemList: Item[] = [];
  isShowAdd: boolean = false;

  ngOnInit() {
    this.itemList = [
      { id: 1, name: 'Item 1', price: 120 },
      { id: 2, name: 'Item 2', price: 150 },
      { id: 3, name: 'Item 3', price: 190 },
    ];
  }

  handleEdit(event: Item) {
    this.itemList = this.itemList.map((item: Item) => {
      if (item.id === event.id) {
        item = { ...item, ...event };
      }
      return item;
    });
  }

  handleRemove(event: Item) {
    this.itemList = this.itemList.filter((item: Item) => {
      return item.id !== event.id;
    });
  }

  showAdd() {
    this.isShowAdd = true;
  }

  handleAdd(event: Item) {
    this.itemList = [event, ...this.itemList];
    this.isShowAdd = false;
  }
}
