import { Component, inject } from '@angular/core';
import { translations } from '../../translations';
import { LanguageService } from '../../services/language.service';

export interface Contact {
  icon: string;
  data: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly #languageService = inject(LanguageService);

  contactData: Contact[] = [
    { icon: 'fa-solid fa-user', data: 'Nick Mookhoek' },
    { icon: 'fa-solid fa-location-dot', data: 'Vlaardingen' },
    { icon: 'fa-solid fa-mobile', data: '06 - 19 78 50 44', link: 'tel:+31619785044' },
    {
      icon: 'fa-brands fa-linkedin',
      data: 'linkedin.com/in/nickmookhoek',
      link: 'https://linkedin.com/in/nickmookhoek',
    },
    {
      icon: 'fa-brands fa-facebook',
      data: 'facebook.com/nick.mookhoek',
      link: 'https://www.facebook.com/nick.mookhoek',
    },
    {
      icon: 'fa-solid fa-envelope',
      data: 'nickmookhoek@upcmail.nl',
      link: 'mailto:nickmookhoek@upcmail.nl',
    },
  ];

  translate(key: string): string | string[] {
    return translations[this.#languageService.language()][key] ?? key;
  }
}
