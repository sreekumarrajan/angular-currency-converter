import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_ENDPOINTS} from '../../app.endpoints';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getExchangeRates (base, target) {
    if (!base || !target) {
      return Observable.create(null);
    }
    let exchangeRateUrl = APP_ENDPOINTS.ExchangeRateUrl;
    exchangeRateUrl = exchangeRateUrl.replace(APP_ENDPOINTS.ReplacementStrings.Base, base.label);
    exchangeRateUrl = exchangeRateUrl.replace(APP_ENDPOINTS.ReplacementStrings.Target, target.label);
    return this.http.get(exchangeRateUrl)
      .catch(error => this.handleError(error));
  }

  handleError(error) {
      if (error && error.hasOwnProperty('status')) {
        if (error.status < 200 || error.status > 300) {
          return Observable.throw({'errorMessage': 'Oops, Network issues! Please try again'});
        }
      }
      return Observable.throw({'errorMessage': 'Oops, something went wrong!'});
  }

}
