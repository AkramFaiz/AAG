import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageType } from '../interface/image.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoSelectedCatergoryService {

  constructor(private http: HttpClient) { }
  url = 'assets/json/natura.json';
  getSelCat(selCat: string) {
    console.log(selCat);
    if (selCat === 'Natura') {
      return this.http.get<ImageType[]>(this.url);
    }
  }
}
