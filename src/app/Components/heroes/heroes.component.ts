import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/Services/heroes.service';
import { HeroeModel } from 'src/app/Models/Heroe.model';
import Swal from 'sweetalert';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public Heores:HeroeModel[] = [];
  public Cargar:boolean = true;

  constructor(private _Services:HeroesService) { }

  ngOnInit() {
    this._Services.GetAllHeroes().subscribe((resp:any)=>{
      this.Heores = resp
      this.Cargar = false;
      console.log(this.Heores);
    })
  }

  Delete(id, idx:number){
    this.Heores.splice(idx,1);
    this._Services.DeleteHeroe(id).subscribe();
  }
}
