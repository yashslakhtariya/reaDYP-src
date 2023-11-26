import { TestBed } from '@angular/core/testing';

import { ReadlistService } from './readlist.service';

describe('ReadlistService', () => {
  let service: ReadlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
