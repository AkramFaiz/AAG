import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurImageService {
  imgVal: string;
  constructor() { }

  get curImg() {
    return this.imgVal;
  }
  setCurImg( val: string ) {
    console.log('curimgaserv', val);
    this.imgVal = val;
  }
}
