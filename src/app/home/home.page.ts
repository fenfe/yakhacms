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
  home1 = true;
  home: string = 'home-active';
  messages:  string = 'disappear';
  homeOwnersProfiles: string = 'disappear';
  buildersProfiles: string = 'disappear';
  homeOwnersrequests:  string = 'disappear';
  buildersQuotations :  string = 'disappear';

<<<<<<< HEAD
  constructor() {}
//active
active: string = '';
=======
  constructor(private router: Router, public loadingController: LoadingController) {
>>>>>>> 7e1566c5d8db2c3fd7de1372c004481f66b85885

   homeFunc() {
    this.home = 'home-active';
    this.messages = 'disappear';
    this.homeOwnersProfiles = 'disappear';
    this.buildersProfiles = 'disappear';
    this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'disappear';
  } 
  messagesFunc() {
    this.home = 'home-inactive';
    this.messages = 'appear';
    this.homeOwnersProfiles = 'disappear';
    this.buildersProfiles = 'disappear';
    this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'disappear';
  }
<<<<<<< HEAD
  homeOwnerProfilesFunc() {
    this.home = 'disappear';
    this.messages = 'disappear';
    this.homeOwnersProfiles = 'appear';
    this.buildersProfiles = 'disappear';
    this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'disappear';

=======
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
>>>>>>> 7e1566c5d8db2c3fd7de1372c004481f66b85885
  }
  builderProfilesFunc() {
    this.home = 'disappear';
    this.messages = 'disappear';
    this.homeOwnersProfiles = 'disappear';
    this.buildersProfiles = 'appear';
    this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'disappear';
  }

/*   ownersrequestsFunc() {
    this.home = 'disappear';
    this.messages = 'disappear';
    this.homeOwnersProfiles = 'disappear';
    this.buildersProfiles = 'disappear';
    this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'disappear';
  }

  builderquotationsFunc() {
    this.home = 'disappear';
    this.messages = 'disappear';
    this.homeOwnersProfiles = 'disappear';
    this.buildersProfiles = 'disappear';
    this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'disappear';
  } */

  gohome(){
    this.home1 = !this.home1
  }


}
