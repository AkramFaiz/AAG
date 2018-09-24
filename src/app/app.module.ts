import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// ng prime
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {LightboxModule} from 'primeng/lightbox';
import {PaginatorModule} from 'primeng/paginator';
import {TabMenuModule} from 'primeng/tabmenu';
import {ProgressBarModule} from 'primeng/progressbar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadComponent } from './head/head.component';
import { DishComponent } from './dish/dish.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { PhotographyComponent } from './photography/photography.component';
import { PaintingComponent } from './painting/painting.component';
import { PopupComponent } from './popup/popup.component';
import { PricePipe } from './pipes/price/price.pipe';

import localeFr from '@angular/common/locales/fr';
// import 'rxjs';
import { registerLocaleData } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { FooterComponent } from './footer/footer.component';
import { PaintCartComponent } from './my-cart/paint-cart/paint-cart.component';
import { PhotoCartComponent } from './my-cart/photo-cart/photo-cart.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeadComponent,
    DishComponent,
    CardComponent,
    HomeComponent,
    PhotographyComponent,
    PaintingComponent,
    PopupComponent,
    PricePipe,
    MyCartComponent,
    AboutMeComponent,
    OrderByPipe,
    FooterComponent,
    PaintCartComponent,
    PhotoCartComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    MenuModule,
    ToastModule,
    MenubarModule,
    SidebarModule,
    FormsModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    LightboxModule,
    PaginatorModule,
    AppRoutingModule,
    TabMenuModule,
    NgZorroAntdModule
  ],
  providers: [MessageService, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
