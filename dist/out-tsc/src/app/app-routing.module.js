var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotographyComponent } from './photography/photography.component';
import { PaintingComponent } from './painting/painting.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PaintCartComponent } from './my-cart/paint-cart/paint-cart.component';
import { PhotoCartComponent } from './my-cart/photo-cart/photo-cart.component';
import { PhotoDetailViewComponent } from './photography/photo-detail-view/photo-detail-view.component';
import { SelectedCategoryComponent } from './photography/selected-category/selected-category.component';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, },
    //  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, },
    { path: 'mycart', component: MyCartComponent,
        children: [{ path: 'paint', component: PaintCartComponent },
            { path: 'photo', component: PhotoCartComponent }]
    },
    { path: 'aboutme', component: AboutMeComponent, },
    // { path: 'photography', component: PhotographyComponent },
    { path: 'photography', component: PhotographyComponent },
    { path: 'selectedCat', component: SelectedCategoryComponent },
    { path: 'photoDetailView', component: PhotoDetailViewComponent },
    { path: 'painting', component: PaintingComponent, },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map