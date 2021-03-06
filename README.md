# Rune-hq

This README outlines the details of collaborating on this Angular application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Anuglar Cli](https://angularjs.org)
* [Bower](https://www.learnhowtoprogram.com/javascript/modern-js-apps/introducing-bower)
* [typeScript](https://www.learnhowtoprogram.com/javascript/angular-js/typescript-introduction-and-installation)

## Installation
* `git clone <https://github.com/dyldlewis/zoo-project>` this repository
* `cd rune-hq`
* [Make sure you have a firebase account and have created a fresh project for this app](https://firebase.google.com/)
* `touch src/app/api-keys.ts`
* Open your api-keys.ts file and copy the following text, replacing the strings with your relevant firebase information
`export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };` (you can find these variables by clicking "Add firebase to your web app" on your projects home page)
* close and save
* `npm install`
* `bower install`

## Running / Development

* `ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ng help` for more details

### Building

* `ng build`

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
