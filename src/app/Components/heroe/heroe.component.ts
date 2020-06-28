import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/Models/Heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/Services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public Heroe: HeroeModel = new HeroeModel();
  public Parametro = {};
  public BntModificar: boolean = false;
  public BtnAgregar: boolean = true;

  constructor(private _ServicesHerore: HeroesService, private activated:ActivatedRoute) { }

  ngOnInit() {
    this.activated.url.subscribe((para)=>{
      this.Parametro = para[1].path;
    })

    console.log(this.Parametro)
    if (this.Parametro == 'Heroe') {
      console.log('no hay')
    }
    else
    {
      this._ServicesHerore.GetHeroeById(this.Parametro).subscribe((resp:any)=>{
        this.Heroe = resp;

        this.BntModificar = true;
        this.BtnAgregar = false;
        console.log(this.BntModificar)
      })
    }
  }

  guardar(form:NgForm){
    if (form.invalid) {
      alert('No has llenado todo los campos')
      return;
    }
    else{
      alert('Registro Completado')
      this._ServicesHerore.PostHeroe(this.Heroe).subscribe(resp =>{
        console.log("Super Heroe Posteado");
      });
    }
  }

  Modificar(form:NgForm){
    if (form.invalid) {
      return;
    }
    else{
      alert('Registro Actualizado')
      this._ServicesHerore.PutHeroe(this.Heroe).subscribe();
    }
  }
}
