import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../app.firebase.config';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;
  constructor(public loadingController: LoadingController, public alertController: AlertController) { }

  ngOnInit() {
  }

  login(){
    this.presentLoadingWithOptions();
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res)=>{ 
     // console.log(snapshotToArray(res));
      this.password = '';
      this.email = '';
    }).catch((error)=>{
      this.presentAlert(error.code, error.message);
   //  console.log(error);
     
    })
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "lines",
      duration: 2000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'secondary'
    });
    return await loading.present();
  }
  async presentAlert(code, msg) {
    const alert = await this.alertController.create({
      subHeader: code,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
