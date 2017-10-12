import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-manage-contacts',
  templateUrl: './manage-contacts.component.html',
  styleUrls: ['./manage-contacts.component.css']
})
export class ManageContactsComponent implements OnInit {
  contacts: any = [];
  elem: any = 'Emel';
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }
  showElem(id: any) {
    this.contactsService.getContact(id)
      .subscribe(elem => {
        this.elem = elem.title;
      });
  }
}
