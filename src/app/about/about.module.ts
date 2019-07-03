import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from '../about/about-page/about-page.component';
import { MyLinkDirective } from '../my-link.directive'


@NgModule({
  declarations: [
    MyLinkDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AboutPageComponent }
    ])
  ]
})
export class AboutModule { }
