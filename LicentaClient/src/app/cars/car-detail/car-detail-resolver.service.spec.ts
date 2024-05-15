/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarDetailResolverService } from './car-detail-resolver.service';

describe('Service: CarDetailResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarDetailResolverService]
    });
  });

  it('should ...', inject([CarDetailResolverService], (service: CarDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
