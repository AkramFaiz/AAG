import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../interface/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoCategoryService {
  url = 'assets/json/photoCategories.json';
  constructor(private http: HttpClient) { }
  getCategories() {
    return this.http.get<Categories[]>(this.url);
  }
}
