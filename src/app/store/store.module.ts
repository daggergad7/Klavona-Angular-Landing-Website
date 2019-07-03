import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StorePageComponent } from '../store/store-page/store-page.component';
import { MyLinkDirective } from '../my-link.directive'


@NgModule({
  declarations: [
    MyLinkDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StorePageComponent }
    ])
  ]
})
export class StoreModule { }
