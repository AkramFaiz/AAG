import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';

const signInRoute: Routes = [{
  path: '', component: SignInComponent,
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(signInRoute)
  ],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
