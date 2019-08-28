import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {


  constructor() {
    
  }

  ngOnInit() {
  //  this.getBuilder();
  }
  getBuilder() {
    // this.dbListHome.collection('HomeOwnerProfile').get().then((snapshot) => {
    //  if (snapshot.empty !== true) {
    //    snapshot.forEach((doc) => {
    //      this.homeOwnerList.push(doc.data());
    //    });
    //   // this.homeOwnerList = this.homeOwnerList[0];
    //    console.log(this.homeOwnerList);
       
    //   // this.overallusers = this.users.length;
    //  }
    // });
  }
}
