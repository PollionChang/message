/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PushManageService } from './push-manage.service';

describe('Service: PushManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushManageService]
    });
  });

  it('should ...', inject([PushManageService], (service: PushManageService) => {
    expect(service).toBeTruthy();
  }));
});