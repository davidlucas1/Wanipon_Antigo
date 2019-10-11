

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-animeinfo',
  templateUrl: './animeinfo.page.html',
  styleUrls: ['./animeinfo.page.scss'],
})
export class AnimeinfoPage implements OnInit {

  constructor( 
    public navCtrl : NavController,
    public db : AngularFireDatabase,
    private store: AngularFirestore,

    ){}
   navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

  inform(){
    this.db.database.ref('/info').push();
  }

  get(){
  }

  salvar() {

  }

  
}
