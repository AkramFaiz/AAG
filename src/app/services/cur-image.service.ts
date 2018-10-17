import { Injectable } from '@angular/core';
import { ImageType } from '../interface/image.interface';

@Injectable({
  providedIn: 'root'
})
export class CurImageService {
  imgVal: ImageType;
  constructor() { }

  get curImg() {
    return this.imgVal;
  }
  setCurImg( val: ImageType ) {
    console.log('curimgaserv', val);
    this.imgVal = val;
  }
}
