import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from '../sign-in-routing/sign-in-routing.module';
import { NgMatModule } from '../ng-mat/ng-mat.module';
import { SignInComponent } from './sign-in.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    NgMatModule,
    SignInRoutingModule,
    ToastModule
  ],
  declarations: [SignInComponent],
  providers: [MessageService]
})
export class SignInModule { }
