import { Component, OnInit } from '@angular/core';
import { Categories } from '../interface/categories.interface';
import { PhotoCategoryService } from '../services/photo-category.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  categories: Categories[];

  constructor(private photoCatSer: PhotoCategoryService) { }

  ngOnInit() {
      this.photoCatSer.getCategories().subscribe(res => this.categories = res);
  }

}
