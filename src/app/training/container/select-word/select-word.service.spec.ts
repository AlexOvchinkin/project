import { TestBed, inject } from '@angular/core/testing';

import { SelectWordService } from './select-word.service';

describe('SelectWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectWordService]
    });
  });

  it('should be created', inject([SelectWordService], (service: SelectWordService) => {
    expect(service).toBeTruthy();
  }));
});
