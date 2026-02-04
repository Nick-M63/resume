import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ChangeDetectorRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements AfterViewInit {
  readonly #cdr = inject(ChangeDetectorRef);
  public container = viewChild<ElementRef<HTMLElement>>('container');

  public hideArrow = false;

  public TrackOnlineResponsibilities: string[] = [
    'Developing and maintaining the front-end of an Angular application',
    'Building user-friendly, responsive interfaces with a focus on usability and maintainability',
    'Contributing to software solutions for the TrackOnline platform in collaboration with the team',
    'Collaborating with back-end developers on data integration and performance',
  ];

  public NNResponsibilities: string[] = [
    'Making complex actuarial calculations for life insurances and pensions;',
    'Monitoring quality through follow-up;',
    'Create Excel-calculation programs to speed up workflows;',
    'Answering questions in the actuarial field of internal departments by telephone;',
    'Handling and dealing with (Ombudsman) complaints;',
  ];

  // TrackOnlineResponsibilities: string[] = [
  //   'Ontwikkelen en onderhouden van de front-end van een Angular-applicatie',
  //   'Bouwen van gebruiksvriendelijke en responsieve interfaces met focus op gebruiksvriendelijkheid',
  //   'Bijdragen aan functionele verbeteringen binnen TrackOnline',
  //   'Samenwerken met back-end developers aan integratie en performance',
  // ];

  // NNResponsibilities: string[] = [
  //   'Complexe actuariële berekeningen maken op het gebied van levensverzekeringen',
  //   'Kwaliteit bewaken door middel van nacontrole',
  //   "Excel-berekeningsprogramma's maken om werkstromen te versnellen",
  //   'Telefonisch beantwoorden van vragen op actuarieel gebied van interne afdelingen',
  //   'Behandelen en afhandelen van (Ombudsman) klachten',
  // ];

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
}
