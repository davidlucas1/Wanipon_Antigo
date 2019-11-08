import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  conta = [{email : "arroz", senha : "joia"}];
  //email;
  //senha;

  constructor(public navCtrl : NavController) { 
    this.conta.push({email : "arrozal", senha : "joias"});
}
  criaConta(email, senha){
    let a = false;
    for(let i = 0; i < this.conta.length; i++){
      if(this.conta[i].email == email && this.conta[i].senha == senha){
        console.log("massa"); a = true;
        break
      }
  }
  if(a == false){
  this.conta.push({email : email, senha : senha});
    console.log(this.conta)} }
  entrar(email, senha){
    for(let i = 0; i < this.conta.length; i++){
      if(this.conta[i].email == email && this.conta[i].senha == senha){this.navCtrl.navigateForward("home")}
      else{console.log("what bad...")}}}

  ngOnInit() {
  }

}
