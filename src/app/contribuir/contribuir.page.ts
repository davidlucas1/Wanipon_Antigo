import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contribuir',
  templateUrl: './contribuir.page.html',
  styleUrls: ['./contribuir.page.scss'],
})
export class ContribuirPage implements OnInit {

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
  this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
