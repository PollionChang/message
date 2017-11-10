import { TestBed, inject } from '@angular/core/testing';

import { GridPanelService } from './grid-panel.service';

describe('GridPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridPanelService]
    });
  });

  it('should be created', inject([GridPanelService], (service: GridPanelService) => {
    expect(service).toBeTruthy();
  }));
});
