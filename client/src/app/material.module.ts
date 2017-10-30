import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MatFormFieldModule, MatInputModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule, MatFormFieldModule, MatInputModule, MdCardModule

  ],
  declarations: [

  ],
  exports: [
    MdButtonModule, MatFormFieldModule, MatInputModule, MdCardModule
  ]
})
export class MaterialModule { }
