#!/bin/bash
git submodule init; git submodule update;
cd frontend; npm install; bower install; grunt; cd ..;
cd backend; npm install; grunt; cd ..;
# checking npm global config for proxy settings
proxy=`sed -n '/proxy=\(.*\)/{p;q;}' ~/.npmrc | sed 's/proxy=//'`
if [[ -n $proxy ]]
then
	proxy="--proxy $proxy"
fi
# reusing npm proxy settings for webdriver-manager if necessary
node node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update $proxy; grunt;