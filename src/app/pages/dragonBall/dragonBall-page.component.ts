import { fileURLToPath } from 'node:url';
import { Component, signal } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: './dragonBall-page.component.html',

})

export class DragonBallPageComponent {

  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 8001},
    {id: 3, name: "Trunks", power: 3001},
  ]);


}
