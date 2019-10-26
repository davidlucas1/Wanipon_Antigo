

import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NodeStringDecoder } from 'string_decoder';

import { IdeaService, Idea } from 'src/app/service/list-animes.service';

@Injectable()


@Component({
  selector: 'app-animeinfo',
  templateUrl: './animeinfo.page.html',
  styleUrls: ['./animeinfo.page.scss'],
})
export class AnimeinfoPage implements OnInit {

  private ideas: Observable<Idea[]>;


  constructor( 
    public navCtrl : NavController,
    private store: AngularFirestore,
    private ideaService: IdeaService
    ){

    }
   navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

}

