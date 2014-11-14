#!/bin/bash
git submodule init; git submodule update;
cd frontend; npm install; bower install; grunt; cd ..;
cd backend; npm install; grunt; cd ..;
node node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update; grunt;