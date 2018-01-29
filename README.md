# AngularCurrencyConverter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

To Do (Proposals):

Feature Extensions: 
1. Add a graph component that shows the trend of the currency rates selected over time.
2. Support Internationalization for Language Toggle. Add language Toggle button at page level.

Technical backlogs and improvements:
1. Device a scheme to cache Api Calls so that the api calls are not fired unnecesarily. 
The API results are update once every day so we could refresh once a day to sync with back end updates.

2. Add unit tests for services.

3. Move common utility functions to util service that is already created in Utils Module.
   One such example is to format the number to two decimal places.
4. Implement Html template using AEM  Sightly.

## Development server

Prerequisites:
You must have installed npm.

Git clone the repository. Navigate to the root of the project in terminal.
Run npm install.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
