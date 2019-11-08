import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-serieordenada',
  templateUrl: './serieordenada.page.html',
  styleUrls: ['./serieordenada.page.scss'],
})
export class SerieordenadaPage implements OnInit {

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
