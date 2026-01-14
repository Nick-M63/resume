import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageComponent, MenuComponent, ContentComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('resume');
}
