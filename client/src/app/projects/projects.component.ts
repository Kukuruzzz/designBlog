import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
 
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  constructor() { }

  ngOnInit() {
  }

}