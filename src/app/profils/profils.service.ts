import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profil} from "./profils";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<{ profils: Profil[]; }> {
    return this.http.get('assets/CV.json') as Observable<{ profils: Profil[] }>;
  }
}
