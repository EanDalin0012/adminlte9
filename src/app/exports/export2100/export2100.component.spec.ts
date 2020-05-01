import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Export2100Component } from './export2100.component';

describe('Export2100Component', () => {
  let component: Export2100Component;
  let fixture: ComponentFixture<Export2100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Export2100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Export2100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
