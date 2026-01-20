import { Component, signal } from '@angular/core';
import { ImageComponent } from './image/image.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [ImageComponent, ContentComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('resume');
}
