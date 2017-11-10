import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassThroughComponent } from './pass-through.component';

describe('PassThroughComponent', () => {
  let component: PassThroughComponent;
  let fixture: ComponentFixture<PassThroughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassThroughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassThroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
