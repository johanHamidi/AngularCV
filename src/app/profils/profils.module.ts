import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilsComponent } from './profils.component';
import {ProfilsRoutingModule} from "./profils-routing.module";



@NgModule({
  declarations: [
    ProfilsComponent
  ],
  imports: [
    CommonModule,
    ProfilsRoutingModule
  ]
})
export class ProfilsModule { }
