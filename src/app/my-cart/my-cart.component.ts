import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  ngOnInit() {
      this.items = [
          {label: 'Painting', icon: 'fa fa-fw fa-paint-brush'},
          {label: 'Photography', icon: 'fa fa-fw fa-camera'}
      ];
      this.activeItem = this.items[0];
  }
}
