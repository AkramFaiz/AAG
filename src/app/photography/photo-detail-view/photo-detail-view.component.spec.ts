import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailViewComponent } from './photo-detail-view.component';

describe('PhotoDetailViewComponent', () => {
  let component: PhotoDetailViewComponent;
  let fixture: ComponentFixture<PhotoDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
