import { Component, OnInit } from '@angular/core';
import { ImageType } from '../../interface/image.interface';
import { MessageService } from 'primeng/api';
import { PaintServiceService } from '../../services/paint-service.service';
import { Router } from '@angular/router';

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
  value: number;
  proFlag = false;
  constructor(private paintS: PaintServiceService, private messageService: MessageService, private route: Router) { }
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
  proceedClk() {
    setTimeout( () => {
      this.proFlag = false;
      this.messageService.add({key: 'payment', severity: 'success', summary: 'Success', detail: 'Process Completed Successfully.'});
    } , 3000 );
    setTimeout( () => {
      this.route.navigate(['/'], {queryParams: { payment: true }});
      this.cardItems = [];
    }, 7500);
  }
}
