import { TestBed } from '@angular/core/testing';

import { ExperiencesproService } from './experiencespro.service';

describe('ExperiencesproService', () => {
  let service: ExperiencesproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperiencesproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
