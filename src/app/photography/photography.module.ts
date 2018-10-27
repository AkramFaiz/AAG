import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailViewComponent } from './photo-detail-view/photo-detail-view.component';
import { CatergoryCardComponent } from './catergory-card/catergory-card.component';
import { SelectedCategoryComponent } from './selected-category/selected-category.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoDetailViewComponent, SelectedCategoryComponent,
    // CatergoryCardComponent
  ]
})
export class PhotographyModule { }
