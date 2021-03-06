import { Injectable, OnInit, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginData } from '../interface/loginData.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  private subjectVal = new BehaviorSubject<any>(false);
  data: any;
  @Output() userClk: EventEmitter = new EventEmitter();
  loginData: LoginData[];
  result: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    // this._http.get('/login').subscribe(res => this.result = res);
    // console.log(this.result);
    // return this._http.get('/login').map(result => this.result = result.json());
  }
  loginCall(creds, res) {
    if (res !== undefined) {
      for ( let s = 0; s < res.length; s++) {
        if ( res[s].username === creds.username && res[s].password === creds.password ) {
          this.setLoginSts(true + ',' + res[s].admin);
        }
      }
    } else {
      this.setLoginSts(false);
    }
  }
  get loginSts() {
    return this.subjectVal.asObservable();
  }
  setLoginSts(subVal: any) {
    console.log('Set logged in called ' + subVal);
    this.subjectVal.next(subVal);
  }
}
