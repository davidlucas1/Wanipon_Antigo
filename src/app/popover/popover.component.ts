import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  public marrapa = [];
  public racas = [{raca : "Humanos", selected : false},
  {raca : "anoes", selected : false},
  {raca : "elfos", selected : false},
  {raca : "gnomos", selected : false},
  {raca : "meio-elfos", selected : false},
  {raca : "meio-orcs", selected : false},
  {raca : "halfling", selected : false},];

  constructor(private data : DataService) { this.marcarRacas();}
changeName(name) {
  this.marrapa = name.detail.value;
  this.data.changeMessage(this.marrapa)
  }
  marcarRacas(){
    /*for(let i = 0; i < this.racas.length; i++){
      for(let a = 0; a < this.marrapa.length;){
        if(this.racas[i].raça === this.marrapa[a]){
          console.log("Essa raça foi marcada.");
          break;}
        else{
          console.log("Essa raça não foi marcada");
          a++;}
      }
    }*/
    for(var i=0; i<this.marrapa.length; i++) {
      if(this.racas.indexOf(this.marrapa[i])) {
          console.log(this.marrapa[i]);
      }
  }
    
  }

  ngOnInit() {this.data.currentMessage.subscribe(animemassa => this.marrapa = animemassa); console.log(this.marrapa)}

}
