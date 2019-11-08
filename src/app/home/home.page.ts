import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

import { IdeaService, Idea } from 'src/app/service/list-animes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public iden;
  public semanais;
  ultimos: firebase.firestore.Query;
  constructor(
    public navCtrl : NavController,
    private router : Router,
    private afs: AngularFirestore,
    ){
      this.ultimos = this.afs.collection('ultimos').ref.orderBy("data","desc").limit(5);
      this.ultimos.get()
      .then(dado=>{
        
        this.semanais = [];
        dado.forEach(docs=>{
          //console.log(docs.data())

          const data = docs.data();
          const id = docs.id;
this.semanais.push({id, ...data})


        })

        console.log(this.semanais);
      });
    }
   navegar(pagina){
    this.navCtrl.navigateForward(pagina);
  }
  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }
}
