import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl : NavController, private router : Router) {}
   navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }
  /*navegar(pagina){
    this.router.navigate(pagina);
  }*/

}
