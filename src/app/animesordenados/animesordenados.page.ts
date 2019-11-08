import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animesordenados',
  templateUrl: './animesordenados.page.html',
  styleUrls: ['./animesordenados.page.scss'],
})
export class AnimesordenadosPage implements OnInit {

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
