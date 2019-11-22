import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = { email: '', senha: '' };
  usuarioFirebase;
  colecaoFirebase;
  //email;
  //senha;

  logout() {
    // this.afa.auth.signOut();

    console.log(this.colecaoFirebase);

  }

  logar() {
    this.afa.auth.signInWithEmailAndPassword(
      this.usuario.email,
      this.usuario.senha
    )
    .then(sucesso => {this.navCtrl.navigateForward("home"); })
    .catch(
      function presentAlert() {
      const alert = document.createElement('ion-alert');
      alert.header = 'Erro';
      alert.message = 'Senha ou Email está incorreto';
      alert.buttons = ['OK'];
    
      document.body.appendChild(alert);
      return alert.present();
    });
  }
  logarfb() {
    this.afa.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(sucesso => {this.navCtrl.navigateForward("home"); })
    .catch(erro => {console.log(erro); });
  }

  registrar() {
    this.afa.auth
      .createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha)
      .then(usuarioFirebase => {
        console.log('deu certo');
        console.log(usuarioFirebase);
      })
      .catch(erro => {
        console.log('erro');
        console.log(erro);
      });
  }

  constructor(
    public navCtrl : NavController,
    private afa: AngularFireAuth,
    private store: AngularFirestore
    ) { 

    this.usuarioFirebase = this.afa.authState;

    this.store.collection('usuarios').snapshotChanges()
      .subscribe(dados => {
        this.colecaoFirebase = dados;
      });

}

 

  salvar() {
    this.store.collection('usuarios').add({
      email: this.usuario.email,
      senha: this.usuario.senha,
    });
  }

  atualizar(item) {
    this.store.collection('usuarios')
      .doc(item.payload.doc.id)
      .set({
        nome: 'tay',
        nota: 5,
        materia: 'alg 2',
      }, {merge: true});
  }

  delete(id) {
    this.store.collection('usuarios')
      .doc(id)
      .delete();
  }

  ngOnInit() {
  }
}
