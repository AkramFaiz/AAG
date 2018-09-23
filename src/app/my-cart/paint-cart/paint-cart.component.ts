import { Component, OnInit } from '@angular/core';
import { ImageType } from '../../interface/image.interface';
import { PaintServiceService } from '../../services/paint-service.service';

@Component({
  selector: 'app-paint-cart',
  templateUrl: './paint-cart.component.html',
  styleUrls: ['./paint-cart.component.css']
})
export class PaintCartComponent implements OnInit {
  resItems: ImageType[];
  cardItems: ImageType[] = [];
  totalCost = 0;
  clickPurse = false;
  clickPaytm = false;
  clickaPay = false;
  clickCard = false;
  constructor(private paintS: PaintServiceService) { }
  ngOnInit() {
    this.paintS.getPaintList().subscribe( (res: ImageType[]) => { this.resItems = res;
      this.resItems.forEach(ele => {
        if ( ele.addedToCart === true) {
            this.cardItems.push(ele);
            this.totalCost += ele.cost;
            console.log(this.cardItems );
        }
      });
    });
  }
}
