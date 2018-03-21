import { TestBed, inject } from '@angular/core/testing';

import { TestingSuitesService } from './testing-suites.service';

describe('TestingSuitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingSuitesService]
    });
  });

  it('should be created', inject([TestingSuitesService], (service: TestingSuitesService) => {
    expect(service).toBeTruthy();
  }));
});
