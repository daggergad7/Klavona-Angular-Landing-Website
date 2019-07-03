import { Component, OnInit } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { FormsModule } from "@angular/forms";
import { ContactService } from 'src/app/shared/contact.service';

import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(  public service : ContactService,
                public firestore: AngularFirestore ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      fname: '',
      email: '',
      note: ''
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
      this.firestore.collection('contacts').add(data);
    this.resetForm(form);
  }

}
