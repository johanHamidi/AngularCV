import { Component, OnInit } from '@angular/core';
import {Experiencespro} from "./experiencespro";
import {ExperiencesproService} from "../experiencespro/experiencespro.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-experiencespro',
  templateUrl: './experiencespro.component.html',
  styleUrls: ['./experiencespro.component.scss']
})
export class ExperiencesproComponent implements OnInit {

  experiencespro: Experiencespro[] = [];

  constructor(private experiencesproServices: ExperiencesproService) {
  }

  ngOnInit(): void {
    this.experiencesproServices.findAll()
      .pipe(
        map(data => data.experiencespro),
        tap(experiencespro => this.experiencespro = experiencespro),
      ).subscribe();
  }
}
