import type { Language } from './services/language.service';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    aboutMe: 'About me',
    heyIm: "Hey, I'm",
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    educationYears: '+4 years of experience in software development',
    onlineCourses: 'Online courses',
    HBOJavaDeveloper: 'HBO Java Developer',
    ActuarialCalculator: 'Actuarial Calculator',
  },
  nl: {
    home: 'Home',
    aboutMe: 'Over mij',
    heyIm: 'Hoi, ik ben',
    education: 'Opleiding',
    experience: 'Ervaring',
    skills: 'Vaardigheden',
    contact: 'Contact',
    educationYears: '+4 jaar ervaring in softwareontwikkeling',
    onlineCourses: 'Online cursussen',
    HBOJavaDeveloper: 'HBO Java Developer',
    ActuarialCalculator: 'Actuarieel Rekenaar',
  },
};
