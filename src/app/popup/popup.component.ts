import { Component, OnInit, Input, DoCheck, AfterViewChecked} from '@angular/core';
import { PopupStateService } from '../services/popup-state.service';
import { CurImageService } from '../services/cur-image.service';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
import { ImageType } from '../interface/image.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit , AfterViewChecked {
  isVisibleMiddle = false;
  imageDetail: string;

  likeCount = 0;
  likeFlag = false;
  cartAct = false;
  selCartList: ImageType[] = [];
  res: any;

  constructor( private messageService: MessageService,
     private loginS: LoginService,
     private popS: PopupStateService, private imgS: CurImageService) { }
  ngOnInit() {
    this.imageDetail = this.imgS.curImg;
    console.log('clicked ngAfterViewChecked', this.imageDetail);
    this.isVisibleMiddle = true;
  }
  ngAfterViewChecked() {

  }
  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
    this.popS.popSetState(false);
  }
  handleCancelMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
    this.popS.popSetState(false);
  }
  commentSubmit(cmt) {
    console.log(cmt);
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
  likeClk(ee) {
    // if (ee.target.className === 'unlike') {
    //   return this.imageList.likeCount++;
    // } else {
    //   return this.imageList.likeCount--;
    // }
  }
}
