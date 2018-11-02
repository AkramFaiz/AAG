import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImageType } from '../interface/image.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaintServiceService implements OnInit {
  // configUrl = 'assets/json/paintData.json';
  result: ImageType[];
  updatedResult: ImageType;
  constructor(private _http: HttpClient) { }
  ngOnInit() {
  }
  getList_Paint() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this._http.get<ImageType[]>('/painting').pipe(map( result => this.result = result));
  }
// update
  saveEditItem_Paint(id, item) {
    return this._http.put<ImageType>('/painting/' + id, item).pipe(map(res => this.updatedResult = res));
  }


//   addItem_Paint(item) {
//     return this._http.post('/painting', item).pipe(map(result => this.result = result));
//  }
//   removeItem_Paint(id) {
//       return this._http.delete('/painting/' + id).pipe(map(result => this.result = result));
//   }
//   editItem_Paint(id) {
//     return this._http.get('/painting/' + id).pipe(map(result => this.result = result));
//   }
}
