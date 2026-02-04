import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { translations } from '../../translations';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  readonly #languageService = inject(LanguageService);

  translate(key: string): string {
    return translations[this.#languageService.language()][key] ?? key;
  } 

  formalEducation = [
    {
      name: 'HBOJavaDeveloper',
      years: '2017 - 2018',
      academy: 'NCOI Opleidingen',
      city: 'Hilversum',
    },
    {
      name: 'ActuarialCalculator',
      years: '2013 - 2015',
      academy: 'Actuarieel Genootschap',
      city: 'Nieuwegein',
    },
  ];

  onlineCourses = ['Angular', 'TypeScript', 'Ionic', 'RxJS', 'HTML', 'CSS'];
}
