import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ImageType } from './../interface/image.interface';
import { PaintServiceService } from '../services/paint-service.service';
import { CurImageService } from '../services/cur-image.service';

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

  constructor(private paintS: PaintServiceService, private imgS: CurImageService ) {
    console.log('const');
  }
  ngOnInit() {
      this.paintS.getPaintList().subscribe( (res: ImageType[]) => { this.images = res; });
  }
  onAfterChange(value) {
      console.log(`onAfterChange: ${value}`);
  }
}
