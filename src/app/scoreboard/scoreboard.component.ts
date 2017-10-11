import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { v4 } from 'uuid';

window['_'] = _;
const arrSkunk = [0, 6];


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

    let scoreValues = _.values(this.boardScores).sort();
    let x = _.sum(scoreValues);
    let winCondition = false;

    let msg = new SpeechSynthesisUtterance('');
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name === 'Google UK English Female'; })[0];

    if (scoreValues[0] === 0) {// max 8 times
      switch (scoreValues[1]) {
        case 6 : msg.text = 'Skunk City'; break;
        case 7 : msg.text = 'Skunk Win!'; winCondition = true; break;
        default : break;
      }
    } else if (x > 40) { // score is around 20/20
      switch (scoreValues[1] - scoreValues[0]) {
        case 0 : msg.text = 'so close but yet so far. '; break;
        case 1 : msg.text = 'this is getting close. '; break;
        case 2 : msg.text = 'You WIN!'; winCondition = true; break;
        case 4 : msg.text = 'I hope you are happy with yourself'; break;
        default : msg.text = 'you already won, what are you trying to prove?'; winCondition = true; break;
      }
    } else if (scoreValues[1] === 21) { // if you got to here, you win.
      msg.text = 'You WIN!';
      winCondition = true;
    }

    if (x % 5 === 0 && !winCondition) { // up to 30 pnt game 12x
      let keys = _.keys(this.boardScores);
      let idx = _.indexOf(keys, this.server);
      this.server = keys[(idx + 1) % keys.length];
      msg.text += ' Change Server, Please';
    }

    window.speechSynthesis.speak(msg);
  }

  verifyWinCondition(boardScores) {
    if (_.isEmpty(_.difference(boardScores.sort(), arrSkunk.sort()))) {
      return 'Skunk City';
    }
    return;
  }

  idSet(ev: string) {
    if (_.isEmpty(this.boardScores)) {
      this.server = ev;
    }
    this.boardScores[ev] = 0;
  }
}
