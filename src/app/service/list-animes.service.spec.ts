import { TestBed } from '@angular/core/testing';

import { ListAnimesService } from './list-animes.service';

describe('ListAnimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListAnimesService = TestBed.get(ListAnimesService);
    expect(service).toBeTruthy();
  });
});
