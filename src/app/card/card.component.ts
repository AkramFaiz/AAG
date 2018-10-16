import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
import { ImageType } from '../interface/image.interface';
import { CurImageService } from '../services/cur-image.service';
import { PopupStateService } from '../services/popup-state.service';

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
  selCartList: ImageType[] = [];
  res: any;
  resp: boolean;
  detailViewFlag: boolean;
  cartAddTrue: boolean;
  likedTrue: boolean;
  // list: Array<number> = [1, 2, 3];
  @Input() imageList;
  // @Output() singleImg: EventEmitter<string> = new EventEmitter<string>();
  constructor(private messageService: MessageService,
    private loginS: LoginService, private popS: PopupStateService,
    private imgS: CurImageService) {
  }
  ngOnInit() {
    // this.list.filter(e => this.list[0] === 1);
    // Add2Cart
      if (this.imageList.addedToCart === true) {
        this.cartAct = true;
      }

    // like
    if (this.imageList.liked === true) {
         this.likeFlag = true;
      }
  }
  cartSelected(sCart, ele) {
    this.loginS.loginSts.subscribe(res => this.res = res);
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
    if (ee.target.className === 'unlike') {
      return this.imageList.likeCount++;
    } else {
      return this.imageList.likeCount--;
    }
  }
  imgClked(img) {
    this.popS.popSetState(true);
    this.popS.popGetState.subscribe( res => { this.detailViewFlag = res;
      console.log(res);
    });
    this.imgS.setCurImg(img);
  }
}
