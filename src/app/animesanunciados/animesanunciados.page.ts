import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animesanunciados',
  templateUrl: './animesanunciados.page.html',
  styleUrls: ['./animesanunciados.page.scss'],
})
export class AnimesanunciadosPage implements OnInit {

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
