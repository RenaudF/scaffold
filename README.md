## Getting Started

Make sure you have the latest packages installed

```
npm install
bower install
```

Note: If you don't have `npm` installed, make sure you have
[node](http://nodejs.com) installed. If you don't have bower,
`npm install -g bower`. You will also need a version of java
installed if you want to run the end to end selenium tests.

The above steps will download all the required software to
build and run this app.

## Running the server

You can run your app using `grunt preview`. This will start a
server on `localhost:8000`, meaning you can simply go to the
url [localhost:8000](http://localhost:8000)
while it's running.

If you'd like to run the compiled version, run
`grunt preview-live`. If you don't have grunt,
`npm install -g grunt-cli`.

## Building the application

This application uses requirejs to load the various modules in
the app folder. However, upon build, all of these files are
concatenated and minified together to create a small, compressed
javascript file.

Running `grunt` by itself will run through all of the steps of
linting the javascript, building out dependencies and ultimately
creating `/dist/require.js`.

## Working with the scaffolded app

There's just enough in place to get you going. Go ahead
and make your changes to `index.html`. You'll start your
javascript work in `app/main.js` by requiring your first
modules. Past that, well, the world is your oyster.

## Tests

All tests are written using `mocha` as a testing framework.
Backend unit tests are ran with mocha directly. Frontend unit tests
are ran using the `karma` test runner. `chai` and `sinon` are available
for assertions, spies and other usefull testing stuff. `protractor`
is being used for end to end testing.

Tests are ran automatically when files under watch are modified. You
can also run the tests manually using `grunt test` which will allow
you to debug. A coverage report is generated and can be accessed by
launching `grunt preview` and going to `localhost:8000/coverage`.
No coverage report is available for backend code yet.

More tests can be added to the test folder but to be loaded in the
test runnner their name must end in `'unit.js'`.

## Deploying your application on a server

Assuming you're already ran `npm install` and `bower install`,
the only pieces required to run the application in its built
state is running `grunt`.

If you're using a webserver like apache or nginx, you'll want
to create a redirect from `/frontend/libs/requirejs/require.js` to
`/frontend/dist/require.js`. (*Note: this is exactly what `grunt
preview-live` does*)
