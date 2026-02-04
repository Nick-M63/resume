import { Injectable, signal } from "@angular/core";

export type Language = 'en' | 'nl';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    readonly #STORAGE_KEY = 'resume_language'

    language = signal<Language>(
        localStorage.getItem(this.#STORAGE_KEY) as Language || 'en'
    );

    setLanguage(language: Language) {
        this.language.set(language);
        localStorage.setItem(this.#STORAGE_KEY, language)
    }
}