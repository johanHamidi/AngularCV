import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Experiencespro} from "./experiencespro";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ExperiencesproService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<{ experiencespro: Experiencespro[]; }> {
    return this.http.get('assets/CV.json') as Observable<{ experiencespro: Experiencespro[] }>;
  }
}
