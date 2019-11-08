import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-animeinfo',
  templateUrl: './animeinfo.page.html',
  styleUrls: ['./animeinfo.page.scss'],
})
export class AnimeinfoPage implements OnInit {

  public id;
  public idea;
  buscar: firebase.firestore.Query;
  

  constructor( 
    public navCtrl : NavController,
    private store: AngularFirestore,
    private route: ActivatedRoute
    ){
      this.id = this.route.snapshot.paramMap.get('id')
      
      this.store.collection("lista").doc(this.id).get().toPromise()
      .then(anime=>{
        this.idea=anime.data();
      })
    }
   navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  animeh(i){
    //return i.nome == this.nome;
  }

  ngOnInit() {

  }

  InfomacaoDoAnime(){

  }

}

