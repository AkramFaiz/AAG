import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintCartComponent } from './paint-cart.component';

describe('PaintCartComponent', () => {
  let component: PaintCartComponent;
  let fixture: ComponentFixture<PaintCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
