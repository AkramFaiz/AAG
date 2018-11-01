import { NgModule } from '@angular/core';
import { PhotoDetailViewComponent } from './photo-detail-view/photo-detail-view.component';
import { CatergoryCardComponent } from './catergory-card/catergory-card.component';
import { SelectedCategoryComponent } from './selected-category/selected-category.component';
import { Routes, RouterModule } from '@angular/router';
import { PhotographyComponent } from './photography.component';
// import { SharedModule } from '../shared/shared.module';

const route: Routes = [
  { path: '', component: PhotographyComponent},
  { path: 'selectedCat', component: SelectedCategoryComponent },
  { path: 'photoDetailView', component: PhotoDetailViewComponent },
];

@NgModule({
  imports: [
    // SharedModule,
    RouterModule
  ],
  declarations: [
    //  PhotoDetailViewComponent,
    //  SelectedCategoryComponent,
    //  CatergoryCardComponent,
  ],
  exports: [
    RouterModule,
  ],
  providers: []
})
export class PhotographyModule { }
