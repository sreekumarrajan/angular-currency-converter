import { TestBed, inject } from '@angular/core/testing';

import { CurrencyService } from './currency-service.service';
import {ApiService} from '../api-service/api-service.service';
import {MockApiService} from '../../test/mocks/mock-api-service.service';
import {FormsModule} from '@angular/forms';

describe('CurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      providers: [CurrencyService,
        {provide: ApiService, useClass: MockApiService}]
    });
  });

  it('should be created', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
