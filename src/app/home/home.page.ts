import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { snapshotToArray } from '../app.firebase.config';
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
  dbHomeOwner = firebase.firestore().collection('HomeOwnerProfile');
  dbBuilder = firebase.firestore().collection('builderProfile');
  numHomeOwner = 0;
  numBuilder = 0;
  
  constructor(private router: Router, public loadingController: LoadingController) {
   // this.numHomeOwner = 4;
    this.dbHomeOwner.get().then((res)=>{
     this.numHomeOwner = res.size;
    })

    this.dbBuilder.get().then((res)=>{
      this.numBuilder = res.size;
     })
}
homeOwnerList(){
  this.router.navigateByUrl('messages');
}
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
  // homeFunc() {
  //   this.home = true;
  //   this.messages = false;
  //   this.homeowner = false;
  //   this.homebuilder = false;
  // }
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
