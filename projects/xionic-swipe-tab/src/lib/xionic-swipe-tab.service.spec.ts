import { TestBed } from '@angular/core/testing';

import { XionicSwipeTabService } from './xionic-swipe-tab.service';

describe('XionicSwipeTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XionicSwipeTabService = TestBed.get(XionicSwipeTabService);
    expect(service).toBeTruthy();
  });
});
