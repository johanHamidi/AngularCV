import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Formations} from "./formations";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<{ formations: Formations[]; }> {
    return this.http.get('assets/CV.json') as Observable<{ formations: Formations[] }>;
  }
}
