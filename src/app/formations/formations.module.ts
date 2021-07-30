import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationsComponent } from './formations.component';
import {FormationsRoutingModule} from "./formations-routing.module";



@NgModule({
  declarations: [
    FormationsComponent
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule
  ]
})
export class FormationsModule { }
