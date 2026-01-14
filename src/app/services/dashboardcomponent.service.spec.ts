import { TestBed } from '@angular/core/testing';

import { DashboardcomponentService } from './dashboardcomponent.service';

describe('DashboardcomponentService', () => {
  let service: DashboardcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
