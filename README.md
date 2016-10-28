## Moogsoft Technical Task

[This repo was cloned from AngularClass NG6 Starter.](https://github.com/AngularClass/NG6-starter) The application was re-structured to make more sense in this small-app context.

A compiled version of the app is provided in the dist folder. A server would need to be running in order to see a working version of the application. Using terminal you can CD into the dist folder and run `python -m SimpleHTTPServer`.  Once loaded the app will wait 10 seconds, before updating the list of results as per the requirement.

The project was put together using Angular 1.5 and the ES6 syntax laid out by AngularClass. [Angular Material](https://material.angularjs.org/latest/) was also used as a UI framework.

The following resources were also used:

  - [Angular-filter - Unique - 'unique.filter.js'](https://github.com/a8m/angular-filter/blob/master/src/_filter/collection/unique.js)

## Compiling...

## Dependencies
Tools needed to run this app:
* `node` and `npm`
Once you have these, install the following as globals:  
`npm install -g gulp karma karma-cli webpack`

## Installing
* `npm install -g gulp karma karma-cli webpack` install global cli dependencies
* `npm install` to install dependencies

## Running the App
NG6 uses Gulp to build and launch the development environment. After you have installed all dependencies, you may run the app. Running `gulp` will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.

### Gulp Tasks
Here's a list of available tasks:
* `webpack`
  * runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `serve`
  * starts a dev server via `webpack-dev-server`, serving the client folder.
* `watch`
  * alias of `serve`
* `default` (which is the default task that runs when typing `gulp` without providing an argument)
	* runs `serve`.
