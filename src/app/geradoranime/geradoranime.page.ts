import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-geradoranime',
  templateUrl: './geradoranime.page.html',
  styleUrls: ['./geradoranime.page.scss'],
})
export class GeradoranimePage implements OnInit {
  animes = [
    {nome: "Demon Slayer", imagem: "../../assets/desejos/1.jpg"},
    {nome: "No Guns Life", imagem: "/assets/desejos/2.jpg"},
    {nome: "Fate/Grand Order", imagem: "/assets/desejos/3.jpg"},
    {nome: "Vinland Saga", imagem: "/assets/desejos/4.jpg"},
    {nome: "Sword Art Online Alicization", imagem: "/assets/desejos/5.jpg"},
    {nome: "Code Geass", imagem: "/assets/desejos/6.jpg"}];
  animeSorteado;

  constructor(public navCtrl : NavController, public popoverController: PopoverController) { this.animeSorteado = null;}
  navegar(pagina) {
    this.navCtrl.navigateForward(pagina);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
sortear(){
  let ani = this.getRandomInt(0, (this.animes.length-1));
  this.animeSorteado = this.animes[ani];

}

  ngOnInit() {
  }

}
