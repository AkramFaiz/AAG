import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupStateService {
  private detailView = new BehaviorSubject<boolean>(false);

  constructor() { }

  get popGetState() {
    return this.detailView.asObservable();
  }
  popSetState(val) {
    this.detailView.next(val);
  }
}
