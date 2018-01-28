import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import {FormsModule} from '@angular/forms';
import {UtilsModule} from './modules/utils/utils.module';
import {ApiService} from './services/api-service/api-service.service';
import {CurrencyService} from './services/currency-service/currency-service.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
