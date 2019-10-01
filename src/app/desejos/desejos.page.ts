import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-desejos',
  templateUrl: './desejos.page.html',
  styleUrls: ['./desejos.page.scss'],
})
export class DesejosPage implements OnInit {

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
