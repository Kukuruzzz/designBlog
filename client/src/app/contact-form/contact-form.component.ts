import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact: Object = {}; // Fix ERROR TypeError: Cannot read property 'firstName' of undefined at Object.eval
  // Coordinates for GoogleMaps
  lat = 53.897544;
  lng = 27.604867;

  constructor(private contactsService: ContactsService) { }

  onSubmit(contact: Contact) {
    this.contactsService.addContact(contact).subscribe();
    this.contact = {};
  }
  ngOnInit() {
  }
}
