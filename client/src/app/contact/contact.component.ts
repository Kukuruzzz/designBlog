import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // Coordinates and zoom for GoogleMaps
  zoom = 11;
  lat = 53.897544;
  lng = 27.604867;

  constructor() { }

  ngOnInit() {
  }

}
