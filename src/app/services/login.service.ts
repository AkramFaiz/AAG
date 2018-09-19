import { Injectable, OnInit, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginData } from '../interface/loginData.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  private subjectVal = new BehaviorSubject<boolean>(false);
  data: any;
  @Output() userClk: EventEmitter = new EventEmitter();
  loginData: LoginData[];
  result: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {

  }
  loginCall(creds, res): boolean {
    if (res !== undefined) {
      for ( let s = 0; s < res.length; s++) {
        if ( res[s].username === creds.username && res[s].password === creds.password ) {
          this.setLoginSts(true);
          return true;
        } else {
          this.setLoginSts(false);
          return false;
        }
      }
    }
  }
  get loginSts() {
    return this.subjectVal.asObservable();
  }
  setLoginSts(subjectVal: any) {
    console.log('Set logged in called ' + subjectVal);
    this.subjectVal.next(subjectVal);
  }
}
