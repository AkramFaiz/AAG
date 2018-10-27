import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoryCardComponent } from './catergory-card.component';

describe('CatergoryCardComponent', () => {
  let component: CatergoryCardComponent;
  let fixture: ComponentFixture<CatergoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatergoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatergoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
