import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { v4 } from 'uuid';

@Component({
  selector: 'app-team-tile',
  templateUrl: './team-tile.component.html',
  styleUrls: ['./team-tile.component.scss']
})
export class TeamTileComponent implements OnInit {
  @Input() color: string = 'primary';
  private _currentServer: string;
  @Input() set currentServer(serverID: string) {
    this._currentServer = serverID;
    this.animatedClass = this.id == serverID ? 'animated infinite pulse' : '';
  }
  get currentServer(): string {
    return this._currentServer;
  }

  @Output() pointsChange: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() idSet: EventEmitter<string> = new EventEmitter<any>(true);

  animatedClass: string = '';
  points: number = 0;
  id: string = v4();

  constructor() { }

  ngOnInit() {
    this.idSet.emit(this.id);
  }

  incrementBtnClick(ev: any) {
    this.points = this.points + 1;
    this.pointsChange.emit({ id: this.id, points: this.points});
  }

}
