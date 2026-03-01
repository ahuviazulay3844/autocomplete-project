import { Component, input } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { InputComponent } from '../input/input.component';
import { Item } from '../shared/item';
import { AppListItemComponent } from "../app-list-item/app-list-item.component";

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [ListItemComponent, InputComponent],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent {
data=input.required<Item[]>();
bgColor = input<string>('#ffffff');
}
