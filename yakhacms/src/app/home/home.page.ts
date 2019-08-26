import { Component } from '@angular/core';

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

  constructor() {

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
