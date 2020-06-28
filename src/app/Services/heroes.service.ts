import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroeModel } from '../Models/Heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public Url:string = "https://localhost:44355/api/Heroe";
  public httpHeader = new HttpHeaders({'Content-Type': 'application/json'})
  

  constructor(private Http:HttpClient) { }

  PostHeroe(Model:HeroeModel){
    return this.Http.post(this.Url,Model,{headers:this.httpHeader});
  }

  GetAllHeroes(){
    return this.Http.get(this.Url);
  }

  GetHeroeById(id){
    return this.Http.get(this.Url+'/'+id);
  }

  DeleteHeroe(id){
    return this.Http.delete(this.Url+'/'+id);
  }

  PutHeroe(Model:HeroeModel){
    return this.Http.put(this.Url,Model,{headers: this.httpHeader});
  }
}
