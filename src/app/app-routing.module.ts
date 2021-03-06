import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'account-setup', loadChildren: './account-setup/account-setup.module#AccountSetupPageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'view-qoutes-builder', loadChildren: './view-qoutes-builder/view-qoutes-builder.module#ViewQoutesBuilderPageModule' },
  { path: 'view-request-owner', loadChildren: './view-request-owner/view-request-owner.module#ViewRequestOwnerPageModule' },  { path: 'reply-message', loadChildren: './reply-message/reply-message.module#ReplyMessagePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
