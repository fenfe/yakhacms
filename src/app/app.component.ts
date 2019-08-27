import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

import { Router } from '@angular/router';
import { firebaseConfig } from './app.firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);
    this.catchUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  catchUser(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user.uid!=null){
        this.router.navigateByUrl('home')
      } else{
        this.router.navigateByUrl('login')
      }
    })
  }
}
