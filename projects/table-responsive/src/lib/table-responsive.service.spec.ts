import { TestBed } from '@angular/core/testing';

import { TableResponsiveService } from './table-responsive.service';

describe('TableResponsiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableResponsiveService = TestBed.get(TableResponsiveService);
    expect(service).toBeTruthy();
  });
});
