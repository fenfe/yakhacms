import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.page.html',
  styleUrls: ['./account-setup.page.scss'],
})
export class AccountSetupPage implements OnInit {

  fullname;
  cellno;
  bio;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  createAccount(){
    firebase.firestore().collection('admin').add({
      name: this.fullname,
      cellno: this.cellno,
      bio: this.bio,
      uid: firebase.auth().currentUser.uid
    })
   // this.router.navigateByUrl('home');
  }
}
