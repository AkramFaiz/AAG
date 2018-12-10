import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from '../ng-mat/ng-mat.module';
import { AddNewItemsRoutingModule } from '../add-new-items-routing/add-new-items-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NgMatModule,
    AddNewItemsRoutingModule,
  ],
  declarations: [ DashboardComponent ]
})
export class AddNewItemsModule { }
