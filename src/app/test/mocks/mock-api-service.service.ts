import {Observable} from 'rxjs/Observable';

export class MockApiService {
  constructor() {
  }

  getExchangeRates() {
    return Observable.of({});
  }
}
