import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CurrencyConverterComponent } from './currency-converter.component';
import {MockCurrencyService} from '../../test/mocks/mock-currency-service.service';
import {CurrencyService} from '../../services/currency-service/currency-service.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;
  let mockCurrencyService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CurrencyConverterComponent ],
      providers: [
        {
          provide: CurrencyService, useClass: MockCurrencyService
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(inject([CurrencyService], currencyService => {
    mockCurrencyService = currencyService;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInputChange', () => {

    it('should correctly set toCurrency denomination ', () => {
      expect(component.fromCurrencyDenomination).toEqual(1);
      component.toCurrencyDenomination = 3;
      component.onInputChange(4, 'from');
      expect(component.toCurrencyDenomination).toEqual(12);

    });

    it('should correctly set fromCurrency denomination ', () => {
      expect(component.fromCurrencyDenomination).toEqual(1);
      component.toCurrencyDenomination = 3;
      component.onInputChange(4, 'to');
      expect(component.fromCurrencyDenomination).toEqual(1.33);

    });

    it('should not change from and to currency denomination if changed field value is random', () => {
      expect(component.fromCurrencyDenomination).toEqual(1);
      component.toCurrencyDenomination = 3;
      component.onInputChange(4, 'something else');
      expect(component.fromCurrencyDenomination).toEqual(1);
      expect(component.toCurrencyDenomination).toEqual(3);

    });

    it('should correct set toCurrency to 0 if fromCurrency is 0', () => {
      component.fromCurrencyDenomination = 0;
      component.toCurrencyDenomination = 3;
      component.onInputChange(0, 'from');
      expect(component.fromCurrencyDenomination).toEqual(0);
      expect(component.toCurrencyDenomination).toEqual(0);
    });

    it('should correct set fromCurrency to 0 if toCurrency is 0', () => {
      component.toCurrencyDenomination = 0;
      component.onInputChange(0, 'to');
      expect(component.fromCurrencyDenomination).toEqual(0);
      expect(component.toCurrencyDenomination).toEqual(0);
    });
  });
});
