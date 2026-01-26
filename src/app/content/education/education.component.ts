import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  formalEducation = [
    {
      name: 'HBO Java Developer',
      years: '2017 - 2018',
      academy: 'NCOI Opleidingen',
      city: 'Hilversum',
    },
    {
      name: 'Actuarial Calculator',
      years: '2013 - 2015',
      academy: 'Actuarieel Genootschap',
      city: 'Nieuwegein',
    },
  ];

  onlineCourses = ['Angular', 'TypeScript', 'Ionic', 'RxJS', 'HTML/CSS'];
}
