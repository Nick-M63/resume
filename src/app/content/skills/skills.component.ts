import { OnInit, Component, ChangeDetectorRef, inject } from '@angular/core';

export interface Skill {
  name: string;
  rating: number;
  animatedRating: number;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit {
  readonly #cdr = inject(ChangeDetectorRef);

  skills: Skill[] = [
    { name: 'Angular', rating: 80, animatedRating: 0 },
    { name: 'HTML', rating: 85, animatedRating: 0 },
    { name: 'CSS', rating: 70, animatedRating: 0 },
    { name: 'TypeScript', rating: 75, animatedRating: 0 },
    { name: 'Ionic', rating: 70, animatedRating: 0 },
    { name: 'RxJS', rating: 68, animatedRating: 0 },
    { name: 'Responsive Design', rating: 62, animatedRating: 0 },
  ];

  ngOnInit(): void {
    this.skills.forEach((s, i) => {
      setTimeout(() => {
        s.animatedRating = s.rating;
        this.#cdr.detectChanges();
      }, i * 120);
    });
  }
}
