import { ViewRequestOwnerPage } from './../view-request-owner/view-request-owner.page';
import { ViewQoutesBuilderPage } from './../view-qoutes-builder/view-qoutes-builder.page';
import { AccountSetupPage } from './../account-setup/account-setup.page';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { snapshotToArray } from '../app.firebase.config';
import { ReplyMessagePage } from '../reply-message/reply-message.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //active: string = 'active';
  mQuote;
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
  dbQuotes = firebase.firestore().collection('HomeOwnerQuotation');
  dbAdmin = firebase.firestore().collection('admin');
  dbPendingUsers = firebase.firestore().collection('User');
  numHomeOwner = 0;
  numBuilder = 0;
navigation: string = "Dashboard/Home";
dbListHome = firebase.firestore();
homeOwnerLi = [];
buildaLi = [];
userDetails = [];
userD;
  user: any;
  adminDetails=[];
  uidProf;
  qouteDet = [];
  idBuilder = [];
  deleteHowner;
  deleteBricklayer;
  incomingUsers = [];
  incomingID;
  declinedUser = [];
  countDeclined = 0;
  messageCount = 0;
  messQuote = [];
  msg: any;
  msgDetails: any[];
  uidMatched: any;
  constructor(private router: Router, public loadingController: LoadingController, public modalController: ModalController) {
 
    /* this.dbAdmin.where('uid','==',firebase.auth().currentUser.uid).get().then((res)=>{
      if(res.size>0){
        res.forEach((doc)=>{
          console.log(doc.data());
        })
      }  else {
          this.router.navigateByUrl('login') ;
      }
    }) */
    this.dbPendingUsers.where('status','==','rejected').onSnapshot((res)=>{
      this.countDeclined = res.size;
      //console.log(this.countDeclined);
      res.forEach((doc)=>{
        this.declinedUser.push(doc);
      })
    })
    this.dbBuilder.get().then((res) => {
      this.numBuilder = res.size;
     })
     this.dbHomeOwner.get().then((res)=>{
       this.numHomeOwner = res.size;
     })

  }
  ngOnInit() {
    this.getProfile();
    this.getBuilder();
    this.getBuilda();
    this.getPendingUsers();
    this.dbQuotes.onSnapshot((res)=>{
      this.messageCount = res.size;
      res.forEach((doc)=>{
        this.messQuote.push(doc.data());
        console.log(this.messQuote);
        this.mQuote = doc.id;
      })
    })

    /* get uid */

    this.uidMatched = firebase.auth().currentUser;

    if(!this.uidMatched) {
      this.router.navigateByUrl('login');

    }else{
      this.router.navigateByUrl('home');
      let uid = this.uidMatched.uid;
      console.log(uid, 'this is my uid ');
      
    }
  }

  //modals
  async presentModal() {
    const modal = await this.modalController.create({
      component: ViewQoutesBuilderPage
    });
    return await modal.present();
  }

  async replyModal() {
    const modal = await this.modalController.create({
      component: ReplyMessagePage
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal = await this.modalController.create({
      component: ViewRequestOwnerPage
    });
    return await modal.present();
  }
  // profile(){
    
  // } 
//   constructor(private router: Router, public loadingController: LoadingController) {
//    // this.numHomeOwner = 4;
//     this.dbHomeOwner.get().then((res)=>{
//      this.numHomeOwner = res.size;
//     })

//     this.dbBuilder.get().then((res)=>{
//       this.numBuilder = res.size;
//      })
// }
createdQoutes(){
  this.dbQuotes.where('uid','==',this.uidProf).get().then((q)=>{
    q.forEach((doc) => {
      this.qouteDet.push(doc.data());
      console.log(this.qouteDet); 
    });
 })
}
homeOwnerList(){
  this.router.navigateByUrl('messages');
}
getProfile(){
  this.dbAdmin.where('uid','==',firebase.auth().currentUser.uid).get().then((res)=>{
    if(res.size>0){
      res.forEach((doc)=>{
        console.log(doc.data());
        this.adminDetails.push(doc.data()) ;
        this.uidProf = doc.id;
      })
    }  else {
        this.router.navigateByUrl('login') ;
    }
  })
}
getBuilder() {
  //this.createdQoutes();
  this.dbHomeOwner.get().then((snapshot) => {
   if (snapshot.empty !== true) {
     snapshot.forEach((doc) => {
       this.homeOwnerLi.push(doc.data());
       this.idBuilder.push(doc.id, doc.data());
     });
    // this.homeOwnerList = this.homeOwnerList[0];
     console.log(this.homeOwnerLi);
    // this.overallusers = this.users.length;
   }
  });
}
getPendingUsers() {
  //this.createdQoutes();
  this.incomingUsers = [];
  this.dbPendingUsers.where('status','==',false).onSnapshot((snapshot) => {
   if (snapshot.empty !== true) {
     snapshot.forEach((doc) => {
       this.incomingUsers.push(doc.data());
       this.incomingID = doc.id;
      // this.idBuilder.push(doc.id, doc.data());
      
     });
    // this.homeOwnerList = this.homeOwnerList[0];
     console.log(this.incomingUsers);
    // this.overallusers = this.users.length;
   }
  });
}
delete(value){
  this.dbHomeOwner.doc(this.deleteHowner).delete().then((res)=> {
    console.log("Document successfully deleted!");
    this.homeOwnerLi = [];
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
  //console.log('Info '+ )
}
deleteMsg(value){
 this.dbQuotes.doc(this.mQuote).delete().then((res)=>{
   console.log('Message deleted');
   this.messQuote = [];
 }).catch(function(error) {
  console.error("Error removing document: ", error);
});
}
deleteBuilder(value){
  this.dbBuilder.doc(this.deleteBricklayer).delete().then((res)=> {
    console.log("Document successfully deleted!");
    this.buildaLi = [];
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
  //console.log('Info '+ )
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
         //console.log(doc.id,this.userDetails);
        this.deleteBricklayer = doc.id;
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
        this.deleteHowner = doc.id ;
      })
    }
  })
}
  selectMessage(msg){
    this.msg = msg;
    this.msgDetails = [];
    this.dbQuotes.where('date','==', msg.date).onSnapshot((snapshot)=>{
      if(snapshot.empty){
        console.log('No message found');
        
      } else {
        snapshot.forEach((doc)=>{
          this.msgDetails.push(doc.data());
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
    firebase.auth().signOut().then((res)=>{
      console.log(res);
      
    });
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
  acceptUser(value){
    this.incomingUsers = [];
    if(value.status==false){
      this.dbPendingUsers.doc(this.incomingID).update({
        status:true
      })
    console.log('founded something');
    }
  }
  decline(value){
    this.incomingUsers = [];
    if(value.status==false){
      this.dbPendingUsers.doc(this.incomingID).update({
        status: "rejected"
      })
    console.log('this person is rejected');
    }
  }
  foundRejected(){
 
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
