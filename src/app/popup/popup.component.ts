import { Component, OnInit, Input} from '@angular/core';
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
export class PopupComponent implements OnInit {
  isVisibleMiddle = false;
  imageDetail: ImageType;

  likeCount = 0;
  likeFlag = false;
  cartAct = false;
  selCartList: ImageType[] = [];
  res: any;
  resp: boolean;
  currCmt = '';
  cmtClk: boolean;

  constructor( private messageService: MessageService,
     private loginS: LoginService,
     private popS: PopupStateService, private imgS: CurImageService) { }
  ngOnInit() {
    this.imgS.curImg.subscribe( res => this.imageDetail = res);
    console.log('clicked onint:', this.imageDetail);
    const logged = this.loginChk();
    if ( logged === true ) {
    this.likeFlag = this.imageDetail.liked;
    this.cartAct = this.imageDetail.addedToCart;
    } else {
      this.likeFlag = false;
      this.cartAct = false;
    }
    this.isVisibleMiddle = true;
  }

  // cart select/ Like select
  cartSelected(sCart, ele) {
    const logged = this.loginChk();
    // tslint:disable-next-line:triple-equals
    if ( logged === true ) {
       this.cartAct = !this.cartAct;
       if ( ele.className === 'cartRemove') {
        this.imageDetail.addedToCart = true;
        this.updateData(this.imageDetail);
        this.selCartList.push(sCart);
       } else if ( ele.className === 'cartAdd') {
        this.imageDetail.addedToCart = false;
        this.updateData(this.imageDetail);
        this.selCartList.pop();
       }
      console.log(this.selCartList);
    } else {
      // this.cartAct = false;
      this.messageService.add({key: 'cart', severity: 'warn',
      summary: 'Not yet logged in.', detail: 'Login Required.'});
    }
  }
  likeClk(ee) {
    const logged = this.loginChk();
    // tslint:disable-next-line:no-debugger
    debugger;
    // tslint:disable-next-line:triple-equals
    if ( logged === true ) {
      console.log(ee);
      this.likeFlag = !this.likeFlag;
      if (ee.className === 'unlike') {
        this.imageDetail.likeCount++;
        this.imageDetail.liked = true;
        this.updateData(this.imageDetail);
        return this.imageDetail.likeCount;
      } else {
        this.imageDetail.likeCount--;
        this.imageDetail.liked = false;
        this.updateData(this.imageDetail);
        return this.imageDetail.likeCount;
      }
    } else {
      // this.cartAct = false;
      this.messageService.add({key: 'cart', severity: 'warn',
      summary: 'Not yet logged in.', detail: 'Login Required.'});
    }
  }
  updateData(fnlImg) {
    this.imgS.setCurImg(fnlImg);
  }

  // popup ok / cancel
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

  // comment
  commentSubmit(cmt) {
    console.log(cmt);
    const logged = this.loginChk();
    if ( logged === true ) {
      if (cmt.value === '') {
        this.cmtClk = false;
        this.messageService.add({
          key: 'comment',
          severity: 'warn',
          summary: 'Comments cannot be empty.',
          detail: 'Comments cannot be empty.'});
        } else {
          this.cmtClk = true;
          this.currCmt = cmt.value;
        }
    } else {
      this.messageService.add({key: 'cart', severity: 'warn',
      summary: 'Not yet logged in.', detail: 'Login Required.'});
    }
  }
  deleteComment() {
    console.log('delCmt');
    this.currCmt = '';
  }
  clear() {
    this.messageService.clear();
  }

  // login in check
  loginChk() {
    this.loginS.loginSts.subscribe(res => this.res = res);
      console.log( 'Login sts: ', this.res);
      if (this.res !== false) {
        this.resp = JSON.parse(this.res.split(',')[0]);
      } else { this.resp = false; }
      return this.resp;
  }
}
