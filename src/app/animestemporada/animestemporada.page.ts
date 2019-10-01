import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animestemporada',
  templateUrl: './animestemporada.page.html',
  styleUrls: ['./animestemporada.page.scss'],
})
export class AnimestemporadaPage implements OnInit {

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
