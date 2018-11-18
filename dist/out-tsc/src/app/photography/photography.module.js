var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { PhotoDetailViewComponent } from './photo-detail-view/photo-detail-view.component';
import { SelectedCategoryComponent } from './selected-category/selected-category.component';
import { RouterModule } from '@angular/router';
import { PhotographyComponent } from './photography.component';
// import { SharedModule } from '../shared/shared.module';
var route = [
    { path: '', component: PhotographyComponent },
    { path: 'selectedCat', component: SelectedCategoryComponent },
    { path: 'photoDetailView', component: PhotoDetailViewComponent },
];
var PhotographyModule = /** @class */ (function () {
    function PhotographyModule() {
    }
    PhotographyModule = __decorate([
        NgModule({
            imports: [
                // SharedModule,
                RouterModule
            ],
            declarations: [],
            exports: [
                RouterModule,
            ],
            providers: []
        })
    ], PhotographyModule);
    return PhotographyModule;
}());
export { PhotographyModule };
//# sourceMappingURL=photography.module.js.map