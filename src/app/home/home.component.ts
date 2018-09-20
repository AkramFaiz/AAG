import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('leafLeft', [
      transition('void => *',[
        animate('3s ease-in',keyframes([
            style({
              offset: 0,
              opacity: 0,
              transform: 'translateX(-100%)'
            }),
            style({
              offset: 1,
              opacity: 1,
              transform: 'translateX(0)'
            })
        ]))
      ])  
    ]),
    trigger('leafRight', [
      transition(':enter',[
        animate('3s ease-in',keyframes([
            style({
              offset: 0,
              opacity: 0,
              transform: 'translateX(100%)'
            }),
            style({
              offset: 1,
              opacity: 1,
              transform: 'translateX(0)'
            })
        ]))
      ])  
    ]),
    trigger('blurEffect',[
      transition(':enter',[style({ opacity: 0 }),animate(5000)])
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
