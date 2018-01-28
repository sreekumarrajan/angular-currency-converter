import { Injectable } from '@angular/core';
import {ApiService} from '../api-service/api-service.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class CurrencyService {

  constructor(private apiService: ApiService ) { }

  getExchangeRates (base, target) {
    if (base.label === target.label) {
      return Observable.of({
        'conversionRate': 1
      });
    }
    return this.apiService.getExchangeRates(base, target)
      .map(res => {
          return {
            'conversionRate': res.rates[target.label]
          };
      });
  }

}
