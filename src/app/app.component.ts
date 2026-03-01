import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Item } from './shared/item';
import { ListItemComponent } from "./list-item/list-item.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AutocompleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'autocomplete-project';
  countries = [
    new Item('ארץ ישראל'),
    new Item('ארה"ב'),
    new Item('צרפת')
  ];

  // רשימה ב' - צבעים
  colors = [
    new Item('כחול'),
    new Item('לבן'),
    new Item('תכלת')
  ];
}
