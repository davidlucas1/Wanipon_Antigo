import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  public marrapa;
  public racas = [{raca : "Humanos", selected : false},
  {raca : "anoes", selected : false},
  {raca : "elfos", selected : false},
  {raca : "gnomos", selected : false},
  {raca : "meio-elfos", selected : true},
  {raca : "meio-orcs", selected : false},
  {raca : "halfling", selected : false},];

  constructor(private data : DataService) {
    this.data.currentMessage.subscribe(animemassa => this.marrapa = animemassa); console.log(this.marrapa);
     this.marcar();
     console.log("ué?")
  }
  filtrar(filtro){
    let newFiltro = []; //novo array de filtro
    //Percorre o array antigo colocando as coisas antigas na nova se não estiverem no novo filtro
    for(let i = 0; i < this.marrapa.length; i++){
      let marrapai = false;
      for(let a = 0; a < filtro.detail.value.length; a++){
        if(this.marrapa[i] == filtro.detail.value[a]){
          marrapai = true;
          break;
        }
      }
    if(marrapai == false){
      newFiltro.push(this.marrapa[i]);
    }
    }
    //agora coloca as coisas do novo filtro no novo array de filtros
    for(let i = 0; i < filtro.detail.value.length; i++){
      let marrapai = false;
      for(let a = 0; a < newFiltro.length; a++){
        if(filtro.detail.value[i] == newFiltro[a]){
          marrapai = true;
          break;
        }
      }
    if(marrapai == false){
      newFiltro.push(filtro.detail.value[i]);
    }
    }
    this.data.changeMessage(newFiltro) //tá mandado o novo filtro
    console.log(this.marrapa);
  }

  marcar(){
    for(let i = 0; i < this.racas.length; i++){
      let marrapai = false;
      for(let a = 0; a < this.marrapa.length; a++){
        if(this.racas[i].selected == this.marrapa[a]){
          marrapai = true;
          break;
        }
      }
    if(marrapai == true){
      this.racas[i].selected = true;
      
    }console.log(this.racas[i].selected)
    }
  }

ngOnInit() {/*this.data.currentMessage.subscribe(animemassa => this.marrapa = animemassa); console.log(this.marrapa); this.marcar();*/}

}
