import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../services/login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  private subjectVal = new BehaviorSubject<boolean>(false);
  data: any;
  data1: any;
  credData: any;
  report: boolean;
  @Output() userClk: EventEmitter<string> = new EventEmitter<string>();
  constructor(private messageService: MessageService, private loginReport: LoginService, private _http: HttpClient) {}
  addSingle() {
      this.messageService.add({key: 'login', severity: 'warn', summary: 'Wrong Credentials', detail: 'Try Again'});
  }
  clear() {
      this.messageService.clear();
  }
  ngOnInit() {
    this._http.get('/src/app/login/login.json').subscribe(
      data => {
        this.data1 = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.data1[0]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  loginClk() {
    this.credData = {
      username: this.username,
      password: this.password
    };
    this.report = this.loginReport.loginCall(this.credData, this.data1);
    console.log(this.report);
      if ( this.report === true ) {
        this.data = {
          username: this.username,
          type: 'login',
          value: false
        };
        this.userAction(this.data);
      } else {
        this.addSingle();
      }
  }

  cancelClk() {
    this.data = {
      username: 'Login',
      type: 'cancel',
      value: false
    };
    this.userAction(this.data);
  }
  userAction(val) {
    this.userClk.emit(val);
  }
}

