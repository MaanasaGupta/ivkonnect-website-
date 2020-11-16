import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards2Component } from './cards2.component';

describe('Cards2Component', () => {
  let component: Cards2Component;
  let fixture: ComponentFixture<Cards2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cards2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
