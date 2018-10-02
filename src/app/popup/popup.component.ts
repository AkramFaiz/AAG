import { Component, OnInit, Input, DoCheck, AfterViewChecked} from '@angular/core';
import { PopupStateService } from '../services/popup-state.service';
import { CurImageService } from '../services/cur-image.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit , AfterViewChecked {
  isVisibleMiddle = false;
  imageDetail: string;
  constructor(private popS: PopupStateService, private imgS: CurImageService) { }
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
}
