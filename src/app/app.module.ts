import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyLinkDirective } from './my-link.directive';



import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { FormsModule } from "@angular/forms";
import { ContactComponent } from './contact/contact.component';


import { ContactService } from './shared/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    MyLinkDirective,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent, ContactComponent]
})
export class AppModule { }
