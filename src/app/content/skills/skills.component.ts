import { OnInit, Component, ChangeDetectorRef, inject, viewChild, ElementRef } from '@angular/core';
import { translations } from '../../translations';
import { LanguageService } from '../../services/language.service';

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
  readonly #languageService = inject(LanguageService);
  readonly #cdr = inject(ChangeDetectorRef);

  public container = viewChild<ElementRef<HTMLElement>>('container');
  public hideArrow = false;

  skills: Skill[] = [
    { name: 'Angular', rating: 80, animatedRating: 0 },
    { name: 'HTML', rating: 85, animatedRating: 0 },
    { name: 'CSS', rating: 70, animatedRating: 0 },
    { name: 'TypeScript', rating: 75, animatedRating: 0 },
    { name: 'Ionic', rating: 70, animatedRating: 0 },
    { name: 'RxJS', rating: 68, animatedRating: 0 },
    { name: 'Responsive Design', rating: 62, animatedRating: 0 },
    { name: 'DevExpress', rating: 67, animatedRating: 0 },
  ];

  ngOnInit(): void {
    this.skills.forEach((s, i) => {
      setTimeout(() => {
        s.animatedRating = s.rating;
        this.#cdr.detectChanges();
      }, i * 120);
    });
  }

  ngAfterViewInit() {
    const host = this.container()?.nativeElement;
    if (!host) return;

    const scroller = host.closest('.content') as HTMLElement | null;
    const el = scroller ?? host;

    const update = () => {
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
      this.hideArrow = atBottom;
      this.#cdr.detectChanges();
    };

    update();
    el.addEventListener('scroll', update);
  }

  translate(key: string): string | string[] {
    return translations[this.#languageService.language()][key] ?? key;
  }
}
