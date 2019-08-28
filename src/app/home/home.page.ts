import { AccountSetupPage } from './../account-setup/account-setup.page';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { snapshotToArray } from '../app.firebase.config';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //active: string = 'active';
 
  home: string = 'home-active';
  messages:  string = 'messages-inactive';
  homeOwnerProfiles: string = 'homeOwnerProfiles-inactive';
  builderProfiles: string = 'builderProfiles-inactive';
 /*  homeOwnersrequests:  string = 'disappear';
  buildersQuotations :  string = 'disappear'; */ // messages:  string = 'disappear';
  homeOwnersProfiles: string = 'disappear';
  buildersProfiles: string = 'disappear';
  homeOwnersrequests: string = 'disappear';
  buildersQuotations: string = 'disappear';
  dbHomeOwner = firebase.firestore().collection('HomeOwnerProfile');
  dbBuilder = firebase.firestore().collection('builderProfile');
  dbAdmin = firebase.firestore().collection('admin');
  numHomeOwner = 0;
  numBuilder = 0;
navigation: string = "Dashboard/Home";
dbListHome = firebase.firestore();
homeOwnerLi = [];
buildaLi = [];
userDetails = [];
userD;
  user: any;

  constructor(private router: Router, public loadingController: LoadingController) {
    this.dbAdmin.where('uid','==',firebase.auth().currentUser.uid).get().then((res)=>{
      if(res.size>0){
        res.forEach((doc)=>{
          console.log(doc.data());
        })
      }  else {
          this.router.navigateByUrl('account-setup') ;
      }
    })

    this.dbBuilder.get().then((res) => {
      this.numBuilder = res.size;
     })
  }
  ngOnInit() {
    this.getBuilder();
    this.getBuilda();
  }
  profile(){
    
  } 
//   constructor(private router: Router, public loadingController: LoadingController) {
//    // this.numHomeOwner = 4;
//     this.dbHomeOwner.get().then((res)=>{
//      this.numHomeOwner = res.size;
//     })

//     this.dbBuilder.get().then((res)=>{
//       this.numBuilder = res.size;
//      })
// }
homeOwnerList(){
  this.router.navigateByUrl('messages');
}
getBuilder() {
  this.dbHomeOwner.get().then((snapshot) => {
   if (snapshot.empty !== true) {
     snapshot.forEach((doc) => {
       this.homeOwnerLi.push(doc.data());
     });
    // this.homeOwnerList = this.homeOwnerList[0];
     console.log(this.homeOwnerLi);
    // this.overallusers = this.users.length;
   }
  });
}
getBuilda() {
  this.dbBuilder.get().then((snapshot) => {
   if (snapshot.empty !== true) {
     snapshot.forEach((doc) => {
       this.buildaLi.push(doc.data());
     });
    // this.homeOwnerList = this.homeOwnerList[0];
     console.log(this.buildaLi);
    // this.overallusers = this.users.length;
   }
  });
}
selectUser(user){
  this.user = user;
  this.userDetails = [];
  this.dbBuilder.where('uid', '==', user.uid).get().then(snapshot => {
    if (snapshot.empty){
      console.log('No review');
     // this.isreviews = false;
    } else {
    //  this.isreviews = true;
      snapshot.forEach(doc => {
        this.userDetails.push(doc.data());
        console.log(this.userDetails);
        
      })
    }
  })
}
selectHome(user){
  this.user = user;
  this.userDetails = [];
  this.dbHomeOwner.where('uid', '==', user.uid).get().then(snapshot => {
    if (snapshot.empty){
      console.log('No review');
     // this.isreviews = false;
    } else {
    //  this.isreviews = true;
      snapshot.forEach(doc => {
        this.userDetails.push(doc.data());
        console.log(this.userDetails);
      })
    }
  })
}
   homeFunc() {
    this.navigation = "Dashboard/Home";
    this.home = 'home-active';
    this.messages = 'messages-inactive';
    this.homeOwnerProfiles = 'homeOwnerProfiles-inactive';
    this.builderProfiles = 'builderProfiles-inactive';
   /*  this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'disappear';  */
  } 
  messagesFunc() {
    this.navigation = "Dashboard/Messages";
    this.home = 'home-inactive';
    this.messages = 'messages-active';
     this.homeOwnerProfiles = 'homeOwnerProfiles-inactive';
    this.builderProfiles = 'builderProfiles-inactive';
    /* this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'home-inactive';  */
  }
  homeOwnerProfilesFunc() {
    this.navigation = "Dashboard/HomeOwnersProfiles";
    this.home = 'home-inactive';
    this.messages = 'messages-inactive';
    this.homeOwnerProfiles = 'homeOwnerProfiles-active';
    this.builderProfiles = 'builderProfiles-inactive';
  /*   this.homeOwnersrequests = 'home-inactive';
    this. buildersQuotations = 'home-inactive'; */
  }
  logout(){
    this.presentLoadingWithOptions();
    firebase.auth().signOut().then(() => {
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
    this.navigation = "Dashboard/BuildersProfiles";
    this.home = 'home-inactive';
    this.messages = 'messages-inactive';
    this.homeOwnerProfiles = 'homeOwnerProfiles-inactive';
    this.builderProfiles = 'builderProfiles-active';
/*     this.homeOwnersrequests = 'disappear';
    this. buildersQuotations = 'disappear'; */
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

  


}
