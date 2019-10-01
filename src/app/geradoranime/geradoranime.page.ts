import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geradoranime',
  templateUrl: './geradoranime.page.html',
  styleUrls: ['./geradoranime.page.scss'],
})
export class GeradoranimePage implements OnInit {

  constructor(public navCtrl : NavController) { }
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
