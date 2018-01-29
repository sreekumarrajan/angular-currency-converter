import {Observable} from 'rxjs/Observable';

export class MockCurrencyService  {
   constructor () {

   }

   getExchangeRates() {
     return Observable.of({
       'conversionRate': 2
     });
   }
}
