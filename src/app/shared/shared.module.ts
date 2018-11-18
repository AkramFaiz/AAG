import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressBarModule } from 'primeng/progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LightboxModule } from 'primeng/lightbox';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';

import { OrderByPipe } from '../pipes/orderBy/order-by.pipe';
import { PricePipe } from '../pipes/price/price.pipe';

import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import localeFr from '@angular/common/locales/fr';
// import 'rxjs';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
import { CardComponent } from '../card/card.component';
import { PopupComponent } from '../popup/popup.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { FooterComponent } from '../footer/footer.component';
import { HeadComponent } from '../head/head.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    MenuModule,
    ToastModule,
    MenubarModule,
    SidebarModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    ButtonModule,
    CardModule,
    LightboxModule,
    PaginatorModule,
    TabMenuModule,
    NgZorroAntdModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    // OrderByPipe,
    // PricePipe,
    // CardComponent,
    // PopupComponent,
    // AboutMeComponent,
    // FooterComponent,
    // HeadComponent,
    // LoginComponent,
  ],
  exports: [
    // OrderByPipe,
    // PricePipe,
    // CardComponent,
    // PopupComponent,
    // AboutMeComponent,
    // FooterComponent,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class SharedModule { }
