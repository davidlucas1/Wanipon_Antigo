import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public otorapa;
  public barraPesquisa;
  public pesquisa;
  constructor(public navCtrl : NavController, public popoverController: PopoverController, private data: DataService) {
    this.barraPesquisa = false;
  }
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
  pesquisar(pesquisa){
    if(this.barraPesquisa == false){this.barraPesquisa = true;}
    else{
     this.pesquisa = pesquisa;
      this.barraPesquisa = false;
  }}

  ngOnInit() {
    this.data.currentMessage.subscribe(animemassa => this.otorapa = animemassa);
  }
}
