import { Component, OnInit } from '@angular/core';
import { ImageType } from './../interface/image.interface';
import { PaintServiceService } from '../services/paint-service.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {
  images: ImageData;
  detailView = false;
  rangeVal: number[] = [0, 100];
  cardData: any;
  orderCode = 1;
  curKeyVal = 'cost';
  singleValue;
  rangeValue;

  constructor(private paintS: PaintServiceService) {
  }
  ngOnInit() {
      this.paintS.getPaintList().subscribe( (res: ImageData) => { this.images = res; });
  }
  curImage(e) {
    console.log('image: ' + e);
    if (e) {
      this.detailView = true;
    }
  }
  onAfterChange(value) {
    console.log(`onAfterChange: ${value}`);
  }
}
