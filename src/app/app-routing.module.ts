import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    //loadChildren: './lazy/lazy.module#LazyModule', // use this syntax for non-ivy or Angular 7 and below
    loadChildren : () => import('./home/home.module').then(m => m.HomeModule), // new dynamic import method
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {
    path: 'about',
    //loadChildren: './lazy/lazy.module#LazyModule', // use this syntax for non-ivy or Angular 7 and below
    loadChildren : () => import('./about/about.module').then(m => m.AboutModule), // new dynamic import method
  },
  {
    path: 'store',
    //loadChildren: './lazy/lazy.module#LazyModule', // use this syntax for non-ivy or Angular 7 and below
    loadChildren : () => import('./store/store.module').then(m => m.StoreModule), // new dynamic import method
  },
  {path: '404', 
  loadChildren : () => import('./fourzero/fourzero.module').then(m => m.FourzeroModule),
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }