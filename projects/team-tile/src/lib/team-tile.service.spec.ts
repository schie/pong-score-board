import { TestBed, inject } from '@angular/core/testing';

import { TeamTileService } from './team-tile.service';

describe('TeamTileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamTileService]
    });
  });

  it('should be created', inject([TeamTileService], (service: TeamTileService) => {
    expect(service).toBeTruthy();
  }));
});
