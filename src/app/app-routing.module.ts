import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { HeroesComponent } from './Components/heroes/heroes.component';

const Routes:Routes = [
  { path: 'Heroes', component: HeroesComponent },
  { path: 'Herore/:id', component: HeroeComponent },
  { path: '**', pathMatch:'full',  component:HeroeComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
