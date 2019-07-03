import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  formData:Contact;

  constructor(public firestore: AngularFirestore) { }
}
