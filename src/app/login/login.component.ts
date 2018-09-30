import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
// import { BehaviorSubject } from 'rxjs';
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
  // private subjectVal = new BehaviorSubject<boolean>(false);
  data: any;
  data1: any;
  resp: Array<string>;
  credData: any;
  report: any;
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
        console.log(this.data1);
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
    this.loginReport.loginCall(this.credData, this.data1);
    this.loginReport.loginSts.subscribe( res => { this.report = res; });
    this.resp = this.report.split(',');
      if ( this.resp[0] === 'true' && this.resp[1] === 'true' ) {
          this.data = {
            username: this.username,
            type: 'login',
            admin: true,
          };
      } else if (this.resp[0] === 'true' && this.resp[1] === 'false') {
        this.data = {
          username: this.username,
          type: 'login',
          admin: false,
        };
      } else {
        this.addSingle();
      }
      this.userAction(this.data);
      console.log(this.data);
  }

  cancelClk() {
    this.data = {
      username: 'Login',
      type: 'cancel',
      admin: false
    };
    this.userAction(this.data);
  }
  userAction(val) {
    this.userClk.emit(val);
  }
}

