import { Injectable } from '@angular/core';
import { ImageType } from '../interface/image.interface';
import { BehaviorSubject, Subject } from 'rxjs';
import { PaintServiceService } from './paint-service.service';

@Injectable({
  providedIn: 'root'
})
export class CurImageService {
  private imgVal: any = new BehaviorSubject<any>('');
  constructor(private paintS: PaintServiceService) { }

  get curImg() {
    console.log(this.imgVal);
    return this.imgVal.asObservable();
  }
  setCurImg( val: ImageType ) {
    console.log('curimgaserv', val);
    // this.paintS.
    // this.imgVal = val;
    this.imgVal.next(val);
  }
}
