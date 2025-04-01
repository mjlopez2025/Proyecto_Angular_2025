import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../components/interfaces/character.interface';


//LEEMOS DEL LOCAL STORAGE
const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
};


@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

    // GRABAMOS EN EL LOCAL STORAGE
    saveToLocalStorage = effect(() => {
      localStorage.setItem('characters', JSON.stringify(this.characters()));
    });


  addCharacter(Character: Character) {
    this.characters.update((list) => [...list, Character]);
  }

}
