import { Component, input } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './app-list-item.component.html',
  styleUrl: './app-list-item.component.css'
})
export class AppListItemComponent {
item = input.required<Item>();
}
