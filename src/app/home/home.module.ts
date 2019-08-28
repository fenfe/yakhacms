import { ViewRequestOwnerPage } from './../view-request-owner/view-request-owner.page';
import { ViewQoutesBuilderPage } from './../view-qoutes-builder/view-qoutes-builder.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ViewQoutesBuilderPage, ViewRequestOwnerPage],
  entryComponents: [
    ViewQoutesBuilderPage,
    ViewRequestOwnerPage
  ]
})
export class HomePageModule {}
