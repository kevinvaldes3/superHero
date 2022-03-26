import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  lista: any = {};
  listaMostrar: any = [];
  array:any = []; 
  constructor(
    public json: HeroesService
  ) {
    
  }

  ngOnInit(): void {
  this.mostrar()
  }

  

  mostrar() {
      
    this.json.getJson('https://akabab.github.io/superhero-api/api/all.json').subscribe((res: any) => {
      var id: any = [];
      this.lista = [];
      res.forEach((item: any) => {
        id.push(Math.floor(Math.random() * res.length))
      })
      while (this.array.length < 20){
        this.array.push(Math.floor(res.length*Math.random()));
      } 
      res.forEach((item: any) => {
        var listauno = id.find((s: any) => s === item.id);
        if (item.id = listauno) {
          this.lista.push(item)
        }
      })
      if (this.lista.length = 20) {
        this.lista
      }
      console.log('boton',this.lista);
      
    })
    
    console.log("array");
  }

  onHover(data: any) {
    this.listaMostrar = [];
    this.listaMostrar.push(data)
  }

}