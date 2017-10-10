import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { v4 } from 'uuid';

window['_'] = _;

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  boardScores: any = {};
  server: string;

  constructor() { }

  ngOnInit() {
  }

  pointsChanged(ev: any) {
    this.boardScores[ev.id] = ev.points;
    let x = _.sum(_.values(this.boardScores));
    if (x % 5 === 0) {
      let keys = _.keys(this.boardScores);
      let idx = _.indexOf(keys, this.server);
      this.server = keys[(idx + 1) % keys.length];
      var msg = new SpeechSynthesisUtterance('Change Server');
      window.speechSynthesis.speak(msg);
    }
  }

  idSet(ev: string) {
    if (_.isEmpty(this.boardScores)) {
      this.server = ev;
    }
    this.boardScores[ev] = 0;
  }
}
