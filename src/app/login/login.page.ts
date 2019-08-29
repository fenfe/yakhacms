import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../app.firebase.config';
import { LoadingController, AlertController } from '@ionic/angular';
import { empty } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

//  @ViewChild('')
//@ViewChild('myslider') slides: Slides;
slideOpts = {
  initialSlide: 1,
  speed: 400
};
fullname;
cellno;
bio;
  email;
  password;
  dbAdmin = firebase.firestore().collection('admin');
  constructor(public loadingController: LoadingController, public alertController: AlertController, public router: Router) { 
   }

  ngOnInit() {
    //this.getProfile();
  }
  ionViewWillEnter(){
     this.slideOpts;
    // this.createAccount();
  }
  getProfile(){
    this.dbAdmin.where('uid','==',firebase.auth().currentUser.uid).get().then((res)=>{
      if(res.size>0){
        this.router.navigateByUrl('home');
      }  else {
        this.router.navigateByUrl('login');
      }
    })
  }
  login(){
    this.presentLoadingWithOptions();
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res)=>{ 
      // if() {
      //   this.router.navigateByUrl('home');
      // } else {
      //   this.router.navigateByUrl('account-setup')
      // }
      console.log(res.user.uid);
      
   //   this.router.navigateByUrl('')
    }).catch((error)=>{
      this.presentAlert(error.code, error.message);
   //  console.log(error);
     
    })
  }
  checking(){
    firebase.firestore().collection('user').get().then((user)=>{
      if(user){
        
      }
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
  createAccount(){
    this.dbAdmin.add({
      name: this.fullname,
      cellno: this.cellno,
      bio: this.bio,
      uid: firebase.auth().currentUser.uid
    })
   // this.router.navigateByUrl('home');
  }
}
