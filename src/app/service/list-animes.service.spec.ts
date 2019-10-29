import { TestBed } from '@angular/core/testing';

import { IdeaService } from './list-animes.service';

describe('IdeaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaService = TestBed.get(IdeaService);
    expect(service).toBeTruthy();
  });
});
