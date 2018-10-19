import { Injectable } from '@angular/core';
import { ImageType } from '../interface/image.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurImageService {
  private imgVal: any = new Subject<any>();
  constructor() { }

  get curImg() {
    return this.imgVal.asObservable();
  }
  setCurImg( val: ImageType ) {
    console.log('curimgaserv', val);
    // this.imgVal = val;
    this.imgVal.next(val);
  }
}
