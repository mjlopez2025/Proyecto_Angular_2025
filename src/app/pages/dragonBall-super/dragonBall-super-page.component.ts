
import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragon ball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragon ball/character-add/character-add.component";



interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: './dragonBall-super-page.component.html',
  selector: "dragonBallSuper",
  imports: [CharacterListComponent, CharacterAddComponent],

})

export class DragonBallSuperPageComponent {


  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 8000},

  ]);

  addCharacter(Character: Character) {
    this.characters.update((list) => [...list, Character]);
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
