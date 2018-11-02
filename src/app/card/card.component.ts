import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
import { ImageType } from '../interface/image.interface';
import { CurImageService } from '../services/cur-image.service';
import { PopupStateService } from '../services/popup-state.service';
import { PaintServiceService } from '../services/paint-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, DoCheck {
  likeCount = 0;
  likeFlag: boolean;
  loginTrue = false;
  cartAct: boolean;
  selCartList: ImageType[] = [];
  res: any;
  resp: boolean;
  detailViewFlag: boolean;
  cartAddTrue: boolean;
  likedTrue: boolean;
  updatedImg: boolean;
  // list: Array<number> = [1, 2, 3];
  @Input() imageList;
  // @Output() singleImg: EventEmitter<string> = new EventEmitter<string>();
  constructor(private messageService: MessageService,
    private loginS: LoginService, private popS: PopupStateService,
    private imgS: CurImageService, private paintS: PaintServiceService) {
  }
  ngOnInit() {
    this.updatedImg = false;
  }
  ngDoCheck() {
    const logged = this.loginChk();
    if ( logged === true ) {
    // Add2Cart
      if (this.imageList.addedToCart === true) {
        this.cartAct = true;
      }

    // like
    if (this.imageList.liked === true) {
         this.likeFlag = true;
      }
    } else {
      this.likeFlag = false;
      this.cartAct = false;
    }
  }
  cartSelected(sCart, ele) {
    const logged = this.loginChk();
    // tslint:disable-next-line:triple-equals
    if ( logged === true ) {
       this.cartAct = !this.cartAct;
       if ( ele.className === 'cartRemove') {
        this.imageList.addedToCart = true;
        this.updateData(this.imageList);
        this.selCartList.push(sCart);
       } else if ( ele.className === 'cartAdd') {
        this.imageList.addedToCart = false;
        this.updateData(this.imageList);
        this.selCartList.pop();
       }
      console.log(this.selCartList);
    } else {
      // this.cartAct = false;
      this.messageService.add({key: 'cart', severity: 'warn',
      summary: 'Not yet logged in.', detail: 'Login Required.'});
    }
  }
  clear() {
      this.messageService.clear();
  }
  likeClk(ee) {
    const logged = this.loginChk();
    // tslint:disable-next-line:triple-equals
    if ( logged === true ) {
      console.log(ee);
      this.likeFlag = !this.likeFlag;
      if (ee.target.className === 'unlike') {
        this.imageList.likeCount++;
        this.imageList.liked = true;
        this.updateData(this.imageList);
        return this.imageList.likeCount;
      } else {
        this.imageList.likeCount--;
        this.imageList.liked = false;
        this.updateData(this.imageList);
        return this.imageList.likeCount;
      }
    } else {
      // this.cartAct = false;
      this.messageService.add({key: 'cart', severity: 'warn',
      summary: 'Not yet logged in.', detail: 'Login Required.'});
    }
  }
  updateData(imgList) {
    this.updatedImg = true;
    this.imgS.setCurImg(imgList);
  }
  loginChk() {
    this.loginS.loginSts.subscribe(res => this.res = res);
    if (this.res !== false) {
      this.resp = JSON.parse(this.res.split(',')[0]);
    }
    return this.resp;
  }
  imgClked() {
    this.popS.popSetState(true);
    this.popS.popGetState.subscribe( res => { this.detailViewFlag = res;
      console.log('imgClk', res);
    });
    if (this.updatedImg === false) {
      console.log('imgClk-noupdate');
      this.imgS.setCurImg(this.imageList);
    }
  }
}
