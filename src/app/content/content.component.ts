import { Component, inject, effect, ChangeDetectorRef } from '@angular/core';
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
  readonly #cdr = inject(ChangeDetectorRef);

  public language = this.#languageService.language;
  public languageAnimation = false;
  #timer_1: any;
  #timer_2: any;

  constructor() {
    effect(() => {
      this.#languageService.language();

      clearTimeout(this.#timer_1);
      clearTimeout(this.#timer_2);

      this.languageAnimation = false;

      this.#timer_1 = setTimeout(() => {
        this.languageAnimation = true;
        this.#cdr.detectChanges();
      }, 0);

      this.#timer_2 = setTimeout(() => {
        this.languageAnimation = false;
      }, 300);
    });
  }

  translate(key: string): string | string[] {
    return translations[this.#languageService.language()][key] ?? key;
  }

  setLanguage(language: Language) {
    this.#languageService.setLanguage(language);
  }
}
