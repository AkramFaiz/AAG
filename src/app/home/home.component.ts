import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('leafLeft', [
      transition('void => *',[
        animate('5s ease-in',keyframes([
            style({
              offset: 0,
              opacity: 0,
              transform: 'translateX(-100%)'
            }),
            style({
              offset: 1,
              opacity: 1,
              transform: 'translateX(20px)'
            })
        ]))
      ])  
    ]),
    trigger('leafRight', [
      transition(':enter',[
        animate('5s ease-in',keyframes([
            style({
              offset: 0,
              opacity: 0,
              transform: 'translateX(100%)'
            }),
            style({
              offset: 1,
              opacity: 1,
              transform: 'translateX(20px)'
            })
        ]))
      ])  
    ]) 
  ]
})

export class HomeComponent implements OnInit {
  currentState: boolean;
  constructor() { }

  ngOnInit() {
    this.currentState = true;
  }

}
