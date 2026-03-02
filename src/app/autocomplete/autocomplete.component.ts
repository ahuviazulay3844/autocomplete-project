import { Component, input, OnInit, signal } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { InputComponent } from '../input/input.component';
import { Item } from '../shared/item';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [ListItemComponent, InputComponent],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {
  data = input.required<Item[]>();
  inputName = input.required<string>();
  bgColor = input<string>('#ffffff');

  filteredList = signal<Item[]>([]);

  ngOnInit() {
    this.filteredList.set(this.data());
  }

  handleSearch(searchTerm: string) {
    const allItems = this.data();
    const result = allItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.filteredList.set(result);
  }
}