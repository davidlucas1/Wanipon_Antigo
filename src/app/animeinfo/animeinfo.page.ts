import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { IdeaService, Idea } from 'src/app/service/list-animes.service';

@Injectable()


@Component({
  selector: 'app-animeinfo',
  templateUrl: './animeinfo.page.html',
  styleUrls: ['./animeinfo.page.scss'],
})
export class AnimeinfoPage implements OnInit {

  public nome;
  public aroz : [];
  public semanais = [
    {
      nome : "Lord El-Melloi II’s Case Files: Rail Zeppelin Grace Note",
      ultimoEpisodio : "06",
      imagemzinha : "/assets/an1.jpg"
    },
    {
      nome : "Demon Slayer",
      ultimoEpisodio : "26",
      imagemzinha : "/assets/an2.jpg"
    }
    ,
    {
      nome : "Fire Force",
      ultimoEpisodio : "10",
      imagemzinha : "/assets/animestemporada/4.jpg"
    }
  ]

  private ideas: Observable<Idea[]>;


  constructor( 
    public navCtrl : NavController,
    private store: AngularFirestore,
    private ideaService: IdeaService,
    private route: ActivatedRoute
    ){
      this.nome = this.route.snapshot.paramMap.get('nome')
    }
   navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  animeh(i){
    return i.nome == this.nome;
  }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }
  

}

