import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotographyComponent } from './photography/photography.component';
import { PaintingComponent } from './painting/painting.component';
import { AuthGuard } from './guard/auth.guard';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PaintCartComponent } from './my-cart/paint-cart/paint-cart.component';
import { PhotoCartComponent } from './my-cart/photo-cart/photo-cart.component';
import { PhotoDetailViewComponent } from './photography/photo-detail-view/photo-detail-view.component';
import { SelectedCategoryComponent } from './photography/selected-category/selected-category.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, },
    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, },
    { path: 'mycart', component: MyCartComponent,
        children: [ { path: 'paint', component: PaintCartComponent},
                    { path: 'photo', component: PhotoCartComponent } ]
    },
    { path: 'aboutme', component: AboutMeComponent, },
    { path: 'photography', component: PhotographyComponent },
    { path: 'selectedCat', component: SelectedCategoryComponent },
    { path: 'photoDetailView', component: PhotoDetailViewComponent },
    { path: 'painting', component: PaintingComponent, },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
