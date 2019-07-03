import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FourzeroPageComponent } from './fourzero-page/fourzero-page.component';

@NgModule({
  declarations: [FourzeroPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FourzeroPageComponent }
    ])
  ]
})
export class FourzeroModule { }
