import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Export2200Component } from './export2200.component';

describe('Export2200Component', () => {
  let component: Export2200Component;
  let fixture: ComponentFixture<Export2200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Export2200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Export2200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
