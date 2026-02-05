import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { Language, LanguageService } from '../services/language.service';
import { translations } from '../translations';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  readonly #languageService = inject(LanguageService);

  public language = this.#languageService.language;

  translate(key: string): string | string[] {
    return translations[this.#languageService.language()][key] ?? key;
  }

  setLanguage(language: Language) {
    this.#languageService.setLanguage(language);
  }
}
