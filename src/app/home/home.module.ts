import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { MyLinkDirective } from '../my-link.directive'


@NgModule({
  declarations: [
    MyLinkDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent }
    ])
  ]
})

export class HomeModule { }
