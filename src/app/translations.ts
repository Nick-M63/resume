import type { Language } from './services/language.service';

export const translations: Record<Language, Record<string, string | string[]>> = {
  en: {
    home: 'Home',
    heyIm: "Hey, I'm",
    about_me: 'About me',
    years: 'years',
    experience_years: '4+ years experience',
    about_me_story_1: `With a background as a senior actuarial calculator, I made a successful transition
    into front-end development and have worked professionally in this field for several years.
    I enjoy combining my analytical mindset with creativity to build intuitive,
    well-designed user-friendly interfaces.`,
    about_me_story_2: ` I like turning functional requirements into clear and practical solutions, always with
    attention to usability and code quality. I'm naturally curious, enjoy thinking along about
    improvements, and value collaboration. Working together with colleagues toward a shared goal
    is where I do my best work.`,
    education: 'Education',
    education_years: '+4 years of experience in software development',
    hbo_java_developer: 'HBO Java Developer',
    actuarial_calculator: 'Actuarial Calculator',
    online_courses: 'Online courses',

    experience: 'Experience',
    front_end_developer: 'Front-end Developer',
    responsibilities: 'Responsibilities',
    senior_actuarial_calculator: 'Senior Actuarial Calculator',
    responsibilities_trackonline: [
      'Developing and maintaining the front-end of an Angular application',
      'Building user-friendly, responsive interfaces with a focus on usability and maintainability',
      'Contributing to software solutions for the TrackOnline platform in collaboration with the team',
      'Collaborating with back-end developers on data integration and performance',
    ],
    responsibilities_nn: [
      'Performing complex actuarial calculations for life insurance and pensions',
      'Monitoring quality through follow-up checks',
      'Creating Excel calculation tools to speed up workflows',
      'Answering actuarial questions from internal departments by phone',
      'Handling (Ombudsman) complaints',
    ],
    skills: 'Skills',
    programming_skills: 'My programming skills',
    contact: 'Contact',
    contact_details: 'Contact details',
  },
  nl: {
    home: 'Home',
    heyIm: 'Hoi, ik ben',
    about_me: 'Over mij',
    years: 'jaar',
    experience_years: '4+ jaar ervaring',
    about_me_story_1: `Met een achtergrond als senior actuarieel rekenaar heb ik een 
    succesvolle overstap gemaakt naar front-end development en werk ik inmiddels al meerdere
    jaren professioneel in dit vakgebied. Ik combineer mijn analytische denkwijze graag met 
    creativiteit om intuïtieve en goed ontworpen gebruiksvriendelijke interfaces te bouwen.`,
    about_me_story_2: `Ik vind het leuk om functionele wensen en eisen te vertalen naar duidelijke 
    en praktische oplossingen, met altijd aandacht voor de gebruikerservaring en codekwaliteit. 
    Ik ben van nature nieuwsgierig, denk graag mee over verbeteringen en hecht veel waarde aan samenwerking. 
    Samen met collega’s werken aan een gezamenlijk doel is waar ik het beste tot mijn recht kom.`,
    education: 'Opleiding',
    education_years: '+4 jaar ervaring in softwareontwikkeling',
    hbo_java_developer: 'HBO Java Developer',
    actuarial_calculator: 'Actuarieel Rekenaar',
    online_courses: 'Online cursussen',

    experience: 'Ervaring',
    front_end_developer: 'Front-end Developer',
    responsibilities: 'Verantwoordelijkheden',
    senior_actuarial_calculator: 'Senior Actuarieel Rekenaar',
    responsibilities_trackonline: [
      'Ontwikkelen en onderhouden van de front-end van een Angular-applicatie',
      'Bouwen van gebruiksvriendelijke, responsive interfaces met focus op usability en onderhoudbaarheid',
      'Bijdragen aan software-oplossingen voor het TrackOnline platform, samen met het team',
      'Samenwerken met back-end developers aan data-integratie en performance',
    ],
    responsibilities_nn: [
      'Complexe actuariële berekeningen maken voor levensverzekeringen en pensioenen',
      'Kwaliteit bewaken door middel van nacontroles',
      'Excel-berekeningstools maken om werkprocessen te versnellen',
      'Actuariële vragen van interne afdelingen telefonisch beantwoorden',
      '(Ombudsman) klachten behandelen en afhandelen',
    ],
    skills: 'Vaardigheden',
    programming_skills: 'Mijn programmeervaardigheden',
    contact: 'Contact',
    contact_details: 'Contactgegevens',
  },
};
