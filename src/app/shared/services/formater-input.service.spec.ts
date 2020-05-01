import { TestBed } from '@angular/core/testing';

import { FormaterInputService } from './formater-input.service';

describe('FormaterInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormaterInputService = TestBed.get(FormaterInputService);
    expect(service).toBeTruthy();
  });
});
