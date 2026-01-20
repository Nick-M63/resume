import { Routes } from '@angular/router';
import { HomePageComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { EducationComponent } from './content/education/education.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { SkillsComponent } from './content/skills/skills.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
