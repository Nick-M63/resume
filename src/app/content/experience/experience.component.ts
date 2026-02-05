import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { translations } from '../../translations';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements AfterViewInit {
  readonly #languageService = inject(LanguageService)
  readonly #cdr = inject(ChangeDetectorRef);

  public container = viewChild<ElementRef<HTMLElement>>('container');
  public hideArrow = false;
  
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

  translate(key:string): string | string[] {
    return translations[this.#languageService.language()][key] ?? key
  }

  translateArray(key: string): string[] {
    const value = this.translate(key);
    return Array.isArray(value) ? value : []
  }
}
