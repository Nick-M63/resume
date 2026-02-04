import { Component, inject } from '@angular/core';
import { translations } from '../../translations';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomePageComponent {
  readonly #languageService = inject(LanguageService);

  translate(key: string): string {
    return translations[this.#languageService.language()][key] ?? key;
  }
}
