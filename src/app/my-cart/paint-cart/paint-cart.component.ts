import { Component, OnInit } from '@angular/core';
// import { CartItems } from '../../interface/cart-items.interface';
import { PaintServiceService } from '../../services/paint-service.service';
@Component({
  selector: 'app-paint-cart',
  templateUrl: './paint-cart.component.html',
  styleUrls: ['./paint-cart.component.css']
})
export class PaintCartComponent implements OnInit {
  cardItems: ImageData;
  constructor(private paintS: PaintServiceService) { }
  ngOnInit() {
    this.paintS.getPaintList().subscribe( (res: ImageData) => this.cardItems = res );
  }
}
