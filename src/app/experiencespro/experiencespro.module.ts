import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesproComponent } from './experiencespro.component';
import {ExperiencesproRoutingModule} from "./experiencespro-routing.module";



@NgModule({
  declarations: [
    ExperiencesproComponent
  ],
  imports: [
    CommonModule,
    ExperiencesproRoutingModule
  ]
})
export class ExperiencesproModule { }
