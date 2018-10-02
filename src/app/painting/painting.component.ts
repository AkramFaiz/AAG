import { Component, OnInit } from '@angular/core';
import { ImageType } from './../interface/image.interface';
import { PaintServiceService } from '../services/paint-service.service';
import { PopupStateService } from '../services/popup-state.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {
  images: ImageType[] = [];
  rangeVal: number[] = [0, 100];
  cardData: any;
  orderCode = 1;
  curKeyVal = 'cost';
  singleValue: any;
  rangeValue: any;
  detailViewFlag: boolean;

  constructor(private paintS: PaintServiceService, private popS: PopupStateService) {
  }
  ngOnInit() {
      this.paintS.getPaintList().subscribe( (res: ImageType[]) => { this.images = res; });
  }
  popUpClk() {
    this.popS.popSetState(true);
    this.popS.popGetState.subscribe( res => { this.detailViewFlag = res;
      console.log(res);
    });
  }
  onAfterChange(value) {
    console.log(`onAfterChange: ${value}`);
  }


}
