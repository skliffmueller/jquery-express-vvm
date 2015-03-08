jQuery-Express-VVM
=========

A basic single page application utilizing jQuery for rendering and bindings, requirejs/text for a basic routing-view-viewmodel layout, and express for api and http requests.

Included is Twitter Bootstrap, compiled via less source code using gulp-cli.

## Installation

Install nessesary packages

```
npm install
```

Install gulp cli (may require sudo)

```
npm install gulp-cli -g
```

Build less source and copy js libs from node_modules

```
gulp less
gulp copy
```

## Start the server

```
npm start
```

Open link http://127.0.0.1:3000/ in a web browser

## How it works

This is a basic express application build with no view engine installed. All methods at the moment are located in `routes/index.js`. There is static data for reference on how to do a basic json reply based off parameterized data. This will later be expanded to route to a controller, which will in turn access a mongoDB instance via mongoose.

The index.html is the initial page to load at `/`. This can be changed in `routes/index.js`. index.html is where you want to include your `<html></html>` tags, stylesheets, analytical trackers, and the tag to initiate require js. index.html is already prepopulated with the required information.

`public/app/common.js` is the first file to be loaded by requirejs, this is where various libraries will be loaded. Right now it's pretty slim, and dependent on text, and jQuery. This file also loads `public/app/shell.html` and `public/app/shell.js`.

In shell.js you have a routes variable as shown below:

```
var routes = [{
  path:'/index',
  view:'index'
},{
  path:'/user/:id',
  view:'user'
}];
```

This is where you will want to route your hash uri's. Whenever an `<a href="#...` tag is clicked the routes are searched through and is matched with path. Once a path is matched view is used in reference to the view/viewmodel pair. Anything with `:` prepended is passed over as params to the viewmodel init function (see `public/app/viewmodels/user.js` for an example).

view/viewmodel pair index is an example of an ajax request before loading the html, then when html is rendered the data is injected via jQuery. This would be an example of dynamic event driven html elements.

view/viewmodel pair user is an example of an ajax request and parsing the html before rendering. This is an example of using a simple view engine to render pages. This is also an example of how to handle route parameters.

## TO-DO

- controller/model structure for express routes
- Use express route match methods in shell.js routes
- middleware
- gulp build requirejs
