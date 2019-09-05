import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { LoadingController, AlertController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

//  @ViewChild('')
//@ViewChild('myslider') slides: Slides;
 @ViewChild('myslider', {static: true}) slides: IonSlides;
// slideOpts = {
//   initialSlide: 1,
//   speed: 400
// };
fullname;
cellno;
bio;
  email;
  password;
  username;
  dbAdmin = firebase.firestore().collection('admin');
  public loginForm: FormGroup;
  public profileForm: FormGroup;
  constructor(public loadingController: LoadingController, public alertController: AlertController, public router: Router,
    private formBuilder: FormBuilder) { 
      
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)])
        ]
      });

      this.profileForm = this.formBuilder.group({
        fullname: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
        username: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
        cellno: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
        bio: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      });
   }

  ngOnInit() {
    //this.getProfile();
    this.slides.lockSwipes(true);
  }
  ionViewWillEnter(){
    // this.slideOpts;
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
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((results)=>{ 
      //console.log(results.user.uid);
      this.email='';
      this.password='';
      
      this.dbAdmin.where('uid','==',results.user.uid).onSnapshot((res)=>{
        if(res.size == 0){
              this.presentAlert('Admin not found', 'Create account');
              this.slides.lockSwipes(false);
              this.slides.slideNext();
              // this.router.ngOnDestroy();
      // this.router.navigateByUrl('login');
        } else {
          this.slides.slidePrev();
          this.slides.lockSwipes(true);
        }
      })
  }).catch((error)=>{
this.presentAlert(error.code, error.message);
//  console.log(error);
})
    // let uidUser = firebase.auth().currentUser.uid;
    //  this.dbAdmin.where('uid','==', uidUser).get().then((res)=>{
    //    if(res.size<=0){
    //    this.presentAlert('Admin not found', 'Create account');
    //   //  this.slides.slideNext();
    //   // this.router.navigateByUrl('login');
    //   }
    //  )}
  //   console.log('Login button');
 /// console.log('Clicked');
  
}
  // async loginUser(loginForm: FormGroup): Promise<void> {
  //   if (!loginForm.valid) {
  //     console.log('Form is not valid yet, current value:', loginForm.value);
  //   } else {
  //     this.loading = await this.loadingCtrl.create({
  //       duration: 3000
  //     });
  //     await this.loading.present();

  //     const email = loginForm.value.email;
  //     const password = loginForm.value.password;

  //     this.authService.loginUser(email, password).then(
  //       () => {
  //         this.loading.dismiss().then(() => {
  //           this.router.navigateByUrl('home');
  //         });
  //       },
  //       error => {
  //         this.loading.dismiss().then(async () => {
  //           const alert = await this.alertCtrl.create({
  //             message: error.message,
  //             buttons: [{ text: 'Ok', role: 'cancel' }]
  //           });
  //           await alert.present();
  //         });
  //       }
  //     );
  //   }
  // }
  // checking(){
  //   firebase.firestore().collection('user').get().then((user)=>{
  //     if(user)
  //     }
  //   })
  // }
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
    this.dbAdmin.doc('admin').set({
      name: this.fullname,
      cellno: this.cellno,
      bio: this.bio,
      username: this.username,
      uid: firebase.auth().currentUser.uid
    })
    this.fullname = '';
    this.cellno = 0;
    this.bio = '';
    this.username = null;
    //console.log('Clicked');
    this.router.navigateByUrl('home');
  }
}
