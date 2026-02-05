import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { translations } from '../../translations';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly #languageService = inject(LanguageService);

  translate(key: string): string | string[] {
    return translations[this.#languageService.language()][key] ?? key;
  }
}
