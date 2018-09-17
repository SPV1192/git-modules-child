import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [ButtonComponent],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
