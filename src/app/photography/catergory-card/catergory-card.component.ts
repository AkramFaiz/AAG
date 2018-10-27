import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catergory-card',
  templateUrl: './catergory-card.component.html',
  styleUrls: ['./catergory-card.component.css']
})
export class CatergoryCardComponent implements OnInit {
  @Input() catergoryData;
  favFlag = false;
  constructor(private route: Router) { }

  ngOnInit() {
    console.log(this.catergoryData);
    this.favFlag = this.catergoryData.favourite;
  }
  catergoryClick(selVal: string) {
    this.route.navigate(['/selectedCat', { Selvalue: selVal}]);
  }
}
