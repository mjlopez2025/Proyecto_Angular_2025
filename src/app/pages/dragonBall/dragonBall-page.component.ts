import { fileURLToPath } from 'node:url';
import { Component, signal } from "@angular/core";
import { sign } from 'node:crypto';

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: './dragonBall-page.component.html',

})

export class DragonBallPageComponent {


  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    // {id: 2, name: "Vegeta", power: 8001},
    // {id: 3, name: "Trunks", power: 3001},
    // {id: 3, name: "Yamcha", power: 500},
    // {id: 3, name: "Picolo", power: 3000},
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0 ) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length +1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
    }

    resetFields() {
      this.name.set('');
      this.power.set(0);
    }

}
