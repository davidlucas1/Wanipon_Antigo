import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sugestaoanime',
  templateUrl: './sugestaoanime.page.html',
  styleUrls: ['./sugestaoanime.page.scss'],
})
export class SugestaoanimePage implements OnInit {

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
