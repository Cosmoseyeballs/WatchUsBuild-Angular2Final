import { RACES } from './mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Race } from './race';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  getRaces() {
    return this.http.get('assets/races.json')
          .map(response => <Race[]>response.json().racesData);
  }

   getRace(id) {
    return this.http.get('assets/races.json')
          .map(response => {

            
            let race:Race =  (<Race[]>response.json().racesData.filter(r => r.id.toString() == id))[0]
            return race
          });
  }
}
