
import { Component, inject } from "@angular/core";
import { CharacterListComponent } from "../../components/dragon ball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragon ball/character-add/character-add.component";
import { DragonballService } from "../../services/dragonball.service";


@Component({
  templateUrl: './dragonBall-super-page.component.html',
  selector: "dragonBallSuper",
  imports: [CharacterListComponent, CharacterAddComponent],

})

export class DragonBallSuperPageComponent {

  public dragonballService = inject(DragonballService);
}
