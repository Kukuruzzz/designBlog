import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  constructor(private contactsService: ContactsService) { }

  submitForm(contact: Contact) {
    this.contactsService.addContact(contact)
      .map(x => console.log(x));
  }



  ngOnInit() {
  }
}
