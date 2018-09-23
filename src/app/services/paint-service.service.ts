import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageType } from '../interface/image.interface';

@Injectable({
  providedIn: 'root'
})
export class PaintServiceService implements OnInit {
  configUrl = 'assets/json/paintData.json';
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  getPaintList() {
    return this.http.get<ImageType[]>(this.configUrl);
  }
}
