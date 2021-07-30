import { Component, OnInit } from '@angular/core';
import {map, tap} from "rxjs/operators";
import {Formations} from "./formations";
import {FormationsService} from "./formations.service";


@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  formations: Formations[] = [];

  constructor(private formationsServices: FormationsService) {
  }

  ngOnInit(): void {
    this.formationsServices.findAll()
      .pipe(
        map(data => data.formations),
        tap(formations => this.formations = formations),
      ).subscribe();
  }
}
