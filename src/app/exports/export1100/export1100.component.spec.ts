import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Export1100Component } from './export1100.component';

describe('Export1100Component', () => {
  let component: Export1100Component;
  let fixture: ComponentFixture<Export1100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Export1100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Export1100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
