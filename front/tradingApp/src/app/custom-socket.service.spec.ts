import { TestBed } from '@angular/core/testing';

import { CustomSocketService } from './custom-socket.service';

describe('CustomSocketService', () => {
  let service: CustomSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
