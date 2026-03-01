import { Component, input, Input } from '@angular/core';
import { Item } from '../shared/item';
import { AppListItemComponent } from "../app-list-item/app-list-item.component";
@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [AppListItemComponent],
  
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
items = input.required<Item[]>();}
