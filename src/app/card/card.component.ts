import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MessageService} from 'primeng/api';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  likeFlag = false;
  loginTrue = false;
  cartAct = false;
  res: any;
  // list: Array<number> = [1, 2, 3];
  @Input() imageList;
  @Output() singleImg: EventEmitter<string> = new EventEmitter<string>();
  constructor(private messageService: MessageService, private loginS: LoginService) {
  }
  alertLogin() {
    this.loginS.loginSts.subscribe(res => this.res = res);
    console.log('lSts: ', this.res);
    if ( this.res === true ) {
      this.cartAct = !this.cartAct;
    } else {
      this.cartAct = false;
    this.messageService.add({key: 'cart', severity: 'warn', summary: 'Not yet logged in.', detail: 'Login Required.'});
    }
  }
  clear() {
      this.messageService.clear();
  }
  ngOnInit() {
    // this.list.filter(e => this.list[0] === 1);
  }
  imgClk(e) {
    this.singleImg.emit(e);
  }
}