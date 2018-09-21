import { Component, OnInit } from '@angular/core';
import { ImageType } from './../interface/image.interface';


@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {
  images: ImageType[];
  detailView = false;
  rangeVal: number[] = [0, 100];
  cardData: any;
  orderCode = 1;
  singleValue;
  rangeValue;

  constructor() {
  }
  ngOnInit() {
    this.images = [
      {
        path: '/assets/paint/paint1.jpg',
        cost: 85000,
        width: '100%',
        liked: true
      },
      {
        path: '../../assets/paint/paint2.jpg',
        cost: 25000,
        width: '100%',
        liked: false
      },
      {
        path: 'assets/paint/paint3.jpg',
        cost: 20000,
        width: '100%',
        liked: false
      },
      {
        path: '../assets/paint/paint4.jpg',
        cost: 30000,
        width: '100%',
        liked: false
      },
      {
        path: '../assets/paint/paint5.jpg',
        cost: 40000,
        width: '100%',
        liked: false
      },
      {
        path: '../assets/paint/paint6.jpg',
        cost: 5000,
        width: '100%',
        liked: false
      },
      {
        path: '../assets/paint/paint7.jpg',
        cost: 60000,
        width: '100%',
        liked: false
      },
      {
        path: '../assets/paint/paint8.jpg',
        cost: 99000,
        width: '100%',
        liked: false
      },
      {
        path: '../assets/paint/paint9.jpg',
        cost: 80000,
        width: '100%',
        liked: false
      },
      {
        path: '../assets/paint/paint10.jpg',
        cost: 99000,
        width: '100%',
        liked: false
      },
      {
        path: '../assets/paint/paint11.jpg',
        cost: 60000,
        width: '140px',
        liked: false
      },
      {
        path: '../assets/paint/paint12.jpg',
        cost: 89000,
        width: '140px',
        liked: false
      }
    ];
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
