import { Component, OnInit } from '@angular/core';
import {CURRENCIES, Currency} from '../../models/currency.model';
import {CurrencyService} from '../../services/currency-service/currency-service.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  selectedFromCurrency: Currency;
  selectedToCurrency: Currency;
  fromCurrencyDenomination: number;
  toCurrencyDenomination: number;
  currencies: Array<Currency>;
  hasError: boolean = false;
  readonly DEFAULT_SELECTED_FROM_CURRENCY = 'CAD';
  readonly DEFAULT_SELECTED_TO_CURRENCY = 'USD';

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencies = CURRENCIES;
    this.currencies.forEach(currency => {
      if (currency.label === this.DEFAULT_SELECTED_FROM_CURRENCY) {
        this.selectedFromCurrency = currency;
      }
    });
    this.currencies.forEach(currency => {
      if (currency.label === this.DEFAULT_SELECTED_TO_CURRENCY) {
        this.selectedToCurrency = currency;
      }
    });
    this.fromCurrencyDenomination = 1;
    this.onCurrencyChange(this.selectedFromCurrency, 'from');
  }

  onCurrencyChange(newValue, changedField) {
    switch ( changedField ) {
      case 'from':
        this.selectedFromCurrency = newValue;
        this.currencyService.getExchangeRates(this.selectedFromCurrency, this.selectedToCurrency)
          .subscribe(res => {
            this.hasError = false;
            if (res && res.conversionRate) {
              this.toCurrencyDenomination = (Number)((this.fromCurrencyDenomination * res.conversionRate).toFixed(2));
            }
          }, error => {
            this.handleComponentError(error);
          });
        break;
      case 'to':
        this.selectedToCurrency = newValue;
        this.currencyService.getExchangeRates(this.selectedFromCurrency, this.selectedToCurrency)
          .subscribe(res => {
            this.hasError = false;
            if (res && res.conversionRate) {
              this.fromCurrencyDenomination = (Number)((this.toCurrencyDenomination / res.conversionRate).toFixed(2));
            }
          }, error => {
            this.handleComponentError(error);
          });
        break;
      default:
        break;
    }
  }

  onInputChange(newValue, changedField) {

    const existingConversionRate =  this.fromCurrencyDenomination !== 0 ?
      this.toCurrencyDenomination / this.fromCurrencyDenomination : 0;

    switch ( changedField ) {
      case 'from':
        this.fromCurrencyDenomination = newValue;
        this.toCurrencyDenomination = (Number)((newValue * existingConversionRate).toFixed(2));
        break;
      case 'to':
        this.toCurrencyDenomination = newValue;
        this.fromCurrencyDenomination = existingConversionRate !== 0 ?
          (Number)((newValue / existingConversionRate).toFixed(2)) : 0 ;
        break;
      default:
        break;
    }

  }

  handleComponentError( error ) {
    this.hasError = true;
    this.errorMessage = error.errorMessage ? error.errorMessage : 'Oops, something went wrong!';
  }

}
