import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Export1200Component } from './export1200.component';

describe('Export1200Component', () => {
  let component: Export1200Component;
  let fixture: ComponentFixture<Export1200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Export1200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Export1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
