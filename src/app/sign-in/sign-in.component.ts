import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  addSingle() {
    this.messageService.add({key: 'sign', severity: 'warn', summary: 'Wrong Credentials', detail: 'Try Again'});
  }
  clear() {
      this.messageService.clear();
  }
}
