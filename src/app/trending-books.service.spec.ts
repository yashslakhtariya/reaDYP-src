import { TestBed } from '@angular/core/testing';

import { TrendingBooksService } from './trending-books.service';

describe('TrendingBooksService', () => {
  let service: TrendingBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
