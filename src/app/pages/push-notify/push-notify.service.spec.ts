/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PushNotifyService } from './push-notify.service';

describe('Service: PushNotify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushNotifyService]
    });
  });

  it('should ...', inject([PushNotifyService], (service: PushNotifyService) => {
    expect(service).toBeTruthy();
  }));
});