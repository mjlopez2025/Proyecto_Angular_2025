import { Routes } from '@angular/router';
import { CountePageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallPageComponent } from './pages/dragonBall/dragonBall-page.component';

export const routes: Routes = [{
  path: '',
  component: CountePageComponent,
},
{
  path: 'hero',
  component: HeroPageComponent,
},
{
  path: 'dragonBall',
  component: DragonBallPageComponent,
},
{
  path: '**',
  redirectTo: '',
},
];
