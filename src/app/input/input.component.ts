import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
name = input.required<string>();
searchValue = model<string>('');
onSearch = output<string>({ alias: 'search' });
  handleInput() {
    this.onSearch.emit(this.searchValue())
}
}
