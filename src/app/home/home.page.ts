import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  home: boolean = true;
  messages: boolean = false;
  homeowner: boolean = false;
  homebuilder: boolean = false;

  constructor(private router: Router, public loadingController: LoadingController) {

  }
  logout(){
    this.presentLoadingWithOptions();
    firebase.auth().signOut().then(()=>{
      this.router.navigateByUrl('login');
    })
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 1000,
      message: 'Logging out...',
      translucent: true,
      cssClass: "danger",
    });
    return await loading.present();
  }
  homeFunc() {
    this.home = true;
    this.messages = false;
    this.homeowner = false;
    this.homebuilder = false;
  }
  messagesFunc() {
    this.home = false;
    this.messages = true;
    this.homeowner = false;
    this.homebuilder = false;
  }
  homeOwnerFunc() {
    this.home = false;
    this.messages = false;
    this.homeowner = true;
    this.homebuilder = false;

  }
  homebuilderFunc() {
    this.home = false;
    this.messages = false;
    this.homeowner = false;
    this.homebuilder = true;
  }

}
