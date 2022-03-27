import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  _url = 'https://akabab.github.io/superhero-api/api/all.json'
  //_url ='https://akabab.github.io/superhero-api/api/all.json'
 
info:any={}
  constructor(
    public http: HttpClient
  ) {    
    
  }

  getJson(url:string){
    return this.http.get(url);
  }
}
