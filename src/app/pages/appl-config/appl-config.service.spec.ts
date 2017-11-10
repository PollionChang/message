/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplConfigService } from './appl-config.service';

describe('Service: ApplConfig', () => {
  beforeEach(() => {
    TestBed.configTestingModule({
      providers: [ApplConfigService]
    });
  });

  it('should ...', inject([ApplConfigService], (service: ApplConfigService) => {
    expect(service).toBeTruthy();
  }));
});