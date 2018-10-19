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
    console.log('clicked ngAfterViewChecked', this.imageDetail);
    this.likeFlag = this.imageDetail.liked;
    this.isVisibleMiddle = true;
  }
  // ngAfterViewChecked() {

  // }
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
  }
  deleteComment() {
    console.log('delCmt');
    this.currCmt = '';
  }
  cartSelected(sCart, ele) {
    this.loginS.loginSts.subscribe(res => this.res = res);
    console.log('lSts: ', this.res);
    if (this.res !== false) {
      this.resp = JSON.parse(this.res.split(',')[0]);
    }
    // tslint:disable-next-line:triple-equals
    if ( this.resp === true ) {
      this.cartAct = !this.cartAct;
       if ( ele.className === 'cartRemove') {
        this.selCartList.push(sCart);
       } else if ( ele.className === 'cartAdd') {
        this.selCartList.pop();
       }
      console.log(this.selCartList);
    } else {
      this.cartAct = false;
      this.messageService.add({key: 'cart', severity: 'warn',
      summary: 'Not yet logged in.', detail: 'Login Required.'});
    }
  }
  clear() {
      this.messageService.clear();
  }
  likeClk(ee) {
    console.log(ee.className);
    // backend service call to store the count
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
  }
  updateData(fnlImg) {
    this.imgS.setCurImg(fnlImg);
  }
}
