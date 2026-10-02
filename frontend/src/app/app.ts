import { Component, forwardRef, signal } from '@angular/core';
import { ItemsListComponent } from './components/items-list/items-list';

@Component({
  selector: 'app-root',
  imports: [forwardRef(() => ItemsListComponent )],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
