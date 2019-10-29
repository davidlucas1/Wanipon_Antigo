import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public iden;
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

  constructor(public navCtrl : NavController, private router : Router) {}
   navegar(pagina){
    this.navCtrl.navigateForward(pagina);
  }
  iranimeinfo(uuid) {
    this.navCtrl.navigateForward(`animeinfo/${uuid}`);
    // this.irParaPagina('conversa/' + uuid + '');
  }
}
