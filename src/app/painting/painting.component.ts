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

  singleValue;
  rangeValue;

  constructor() {
  }
  ngOnInit() {
    this.images = [
      {
        path: '/assets/paint/paint1.jpg',
        cost: 300000,
        liked: true
      },
      {
        path: '../../assets/paint/paint2.jpg',
        cost: 25000,
        liked: false
      },
      {
        path: 'assets/paint/paint3.jpg',
        cost: 20000,
        liked: false
      },
      {
        path: '../assets/paint/paint4.jpg',
        cost: 30000,
        liked: false
      },
      {
        path: '../assets/paint/paint5.jpg',
        cost: 40000,
        liked: false
      },
      {
        path: '../assets/paint/paint6.jpg',
        cost: 5000,
        liked: false
      },
      {
        path: '../assets/paint/paint7.jpg',
        cost: 60000,
        liked: false
      },
      {
        path: '../assets/paint/paint8.jpg',
        cost: 2500000,
        liked: false
      },
      {
        path: '../assets/paint/paint9.jpg',
        cost: 100000,
        liked: false
      },
      {
        path: '../assets/vd.jpg',
        cost: 50000,
        liked: false
      },
      {
        path: '../assets/vd.jpg',
        cost: 120000,
        liked: false
      },
      {
        path: '../assets/vd.jpg',
        cost: 200000,
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
