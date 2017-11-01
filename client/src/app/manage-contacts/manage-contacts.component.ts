import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-manage-contacts',
  templateUrl: './manage-contacts.component.html',
  styleUrls: ['./manage-contacts.component.css']
})
export class ManageContactsComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.fetchContacts();
  }
  fetchContacts() {
    this.contactsService.getContacts()
      .subscribe(data => this.contacts = data);
  }
  deleteContact(id: string) {
    if ( confirm('Are you sure?') ) {
      this.contactsService.deleteContact(id).subscribe();
      this.fetchContacts();
      // this.contactsService.getContacts()
      //   .subscribe(data => this.contacts = data);
    }
  }
}
