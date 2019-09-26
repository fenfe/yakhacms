import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewRequestOwnerPage } from './view-request-owner.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRequestOwnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewRequestOwnerPage]
})
export class ViewRequestOwnerPageModule {}
