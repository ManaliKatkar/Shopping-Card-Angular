import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Item } from '../item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Output() addItem = new EventEmitter<Item>();
  @Input() editItem: Item | undefined;
  isSubmmitted: boolean = false;
  addItemForm = this.formBuilder.group({
    price: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.editItem) {
      const { name, price } = this.editItem;
      this.addItemForm.setValue({ name, price })
    }
  }

  handleSubmit() {
    this.isSubmmitted = true;
    if(this.addItemForm.valid){
      const { name, price } = this.addItemForm.value;
      this.addItem.emit({ id: this.editItem && this.editItem.id ? this.editItem.id : Date.now(), name: name ? name : '', price: price ? price : 0 });
      this.addItemForm.reset()
    }
  }

  get f(){
    return this.addItemForm.controls;
  }
}
