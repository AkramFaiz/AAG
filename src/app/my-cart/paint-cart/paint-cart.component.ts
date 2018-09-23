import { Component, OnInit } from '@angular/core';
import { CartItems } from '../../interface/cart-items.interface';
@Component({
  selector: 'app-paint-cart',
  templateUrl: './paint-cart.component.html',
  styleUrls: ['./paint-cart.component.css']
})
export class PaintCartComponent implements OnInit {
  cardItems: CartItems[];
  constructor() { }

  ngOnInit() {
    // this.cardItems = [{
    //   image:'assets/',
    //   cost: 2000
    // }]
  }

}
