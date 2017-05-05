import { Component, OnInit, Input } from '@angular/core';
import { Race } from "../races/race";
import { RacesComponent } from "../races/races.component";

@Component({
  selector: 'race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  @Input() race:Race;
  constructor(private racesComponent:RacesComponent) { }

  ngOnInit() {
  }

   castDate(date) {
    return new Date(date);
  }

  enterRace(){
    this.racesComponent.enterRace(this.race);
  }

  cancelRace(){
    this.racesComponent.cancelRace(this.race);
  }

}
