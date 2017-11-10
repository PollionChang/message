/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApplConfigViewComponent } from './appl-config-view.component';

describe('ApplConfigViewComponent', () => {
  let component: ApplConfigViewComponent;
  let fixture: ComponentFixture<ApplConfigViewComponent>;

  beforeEach(async(() => {
    TestBed.configTestingModule({
      declarations: [ ApplConfigViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplConfigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
