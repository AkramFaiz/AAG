import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PhotoSelectedCatergoryService } from 'src/app/services/photo-selected-catergory.service';
import { ActivatedRoute } from '@angular/router';
import { ImageType } from 'src/app/interface/image.interface';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent implements OnInit, AfterViewInit {
  selValue: any;
  resData: ImageType[];
  rangeVal: number[] = [0, 100];
  cardData: any;
  orderCode = 1;
  curKeyVal = 'cost';
  singleValue: any;
  rangeValue: any;
  constructor(private catSel: PhotoSelectedCatergoryService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
      this.actRoute.paramMap.subscribe( res => this.selValue = res);
      this.catSel.getSelCat(this.selValue.params.Selvalue).subscribe( (res: ImageType[]) => {
        this.resData = res;
      });
  }
  ngAfterViewInit() {
    console.log(this.resData);
  }
}
