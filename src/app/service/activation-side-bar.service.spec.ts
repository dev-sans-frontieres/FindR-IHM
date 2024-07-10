import { TestBed } from '@angular/core/testing';

import { ActivationSideBarService } from './activation-side-bar.service';

describe('ActivationSideBarService', () => {
  let service: ActivationSideBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivationSideBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
