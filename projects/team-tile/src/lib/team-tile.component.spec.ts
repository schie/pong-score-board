import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTileComponent } from './team-tile.component';

describe('TeamTileComponent', () => {
  let component: TeamTileComponent;
  let fixture: ComponentFixture<TeamTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
