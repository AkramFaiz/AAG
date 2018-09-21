import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
import { ImageType } from '../interface/image.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  likeCount = 0;
  likeFlag = false;
  loginTrue = false;
  cartAct = false;
  selCartList:ImageType[]=[];
  res: any;
  // list: Array<number> = [1, 2, 3];
  @Input() imageList;
  @Output() singleImg: EventEmitter<string> = new EventEmitter<string>();
  constructor(private messageService: MessageService, private loginS: LoginService) {
  }
  cartSelected(sCart) {
    this.loginS.loginSts.subscribe(res => this.res = res);
    console.log('lSts: ', this.res);
    if ( this.res === true ) {
      this.cartAct = !this.cartAct;
      this.selCartList.push(sCart);
      console.log(this.selCartList);
    } else {
      this.cartAct = false;
    this.messageService.add({key: 'cart', severity: 'warn', summary: 'Not yet logged in.', detail: 'Login Required.'});
    }
  }
  clear() {
      this.messageService.clear();
  }
  likeClk(ee){
    if(ee.target.className == 'unlike'){
      return this.imageList.likeCount++;
    }else{
      return this.imageList.likeCount--;
    }
  }
  ngOnInit() {
    // this.list.filter(e => this.list[0] === 1);
  }
  imgClk(e) {
    this.singleImg.emit(e);
  }
}
