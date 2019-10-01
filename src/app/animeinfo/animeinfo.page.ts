import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animeinfo',
  templateUrl: './animeinfo.page.html',
  styleUrls: ['./animeinfo.page.scss'],
})
export class AnimeinfoPage implements OnInit {

  constructor( public navCtrl : NavController) { }
   navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }

  ngOnInit() {
  }

}
