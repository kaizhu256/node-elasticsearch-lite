# elasticsearch-lite
this zero-dependency package will download and install the elasticsearch-v1.7.6 prebuilt-binary from https://download.elastic.co/elasticsearch/elasticsearch

[![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-elasticsearch-lite.svg)](https://travis-ci.org/kaizhu256/node-elasticsearch-lite) [![coverage](https://kaizhu256.github.io/node-elasticsearch-lite/build/coverage.badge.svg)](https://kaizhu256.github.io/node-elasticsearch-lite/build/coverage.html/index.html)

[![NPM](https://nodei.co/npm/elasticsearch-lite.png?downloads=true)](https://www.npmjs.com/package/elasticsearch-lite)

[![build commit status](https://kaizhu256.github.io/node-elasticsearch-lite/build/build.badge.svg)](https://travis-ci.org/kaizhu256/node-elasticsearch-lite)

| git-branch : | [master](https://github.com/kaizhu256/node-elasticsearch-lite/tree/master) | [beta](https://github.com/kaizhu256/node-elasticsearch-lite/tree/beta) | [alpha](https://github.com/kaizhu256/node-elasticsearch-lite/tree/alpha)|
|--:|:--|:--|:--|
| test-server-github : | [![github.com test-server](https://kaizhu256.github.io/node-elasticsearch-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build..master..travis-ci.org/app) | [![github.com test-server](https://kaizhu256.github.io/node-elasticsearch-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/app) | [![github.com test-server](https://kaizhu256.github.io/node-elasticsearch-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build..alpha..travis-ci.org/app)|
| test-server-heroku : | [![heroku.com test-server](https://kaizhu256.github.io/node-elasticsearch-lite/heroku-logo.75x25.png)](https://h1-elasticsearch-master.herokuapp.com) | [![heroku.com test-server](https://kaizhu256.github.io/node-elasticsearch-lite/heroku-logo.75x25.png)](https://h1-elasticsearch-beta.herokuapp.com) | [![heroku.com test-server](https://kaizhu256.github.io/node-elasticsearch-lite/heroku-logo.75x25.png)](https://h1-elasticsearch-alpha.herokuapp.com)|
| test-report : | [![test-report](https://kaizhu256.github.io/node-elasticsearch-lite/build..master..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-elasticsearch-lite/build..master..travis-ci.org/test-report.html) | [![test-report](https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/test-report.html) | [![test-report](https://kaizhu256.github.io/node-elasticsearch-lite/build..alpha..travis-ci.org/test-report.badge.svg)](https://kaizhu256.github.io/node-elasticsearch-lite/build..alpha..travis-ci.org/test-report.html)|
| coverage : | [![coverage](https://kaizhu256.github.io/node-elasticsearch-lite/build..master..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-elasticsearch-lite/build..master..travis-ci.org/coverage.html/index.html) | [![coverage](https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/coverage.html/index.html) | [![coverage](https://kaizhu256.github.io/node-elasticsearch-lite/build..alpha..travis-ci.org/coverage.badge.svg)](https://kaizhu256.github.io/node-elasticsearch-lite/build..alpha..travis-ci.org/coverage.html/index.html)|
| build-artifacts : | [![build-artifacts](https://kaizhu256.github.io/node-elasticsearch-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-elasticsearch-lite/tree/gh-pages/build..master..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-elasticsearch-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-elasticsearch-lite/tree/gh-pages/build..beta..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-elasticsearch-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-elasticsearch-lite/tree/gh-pages/build..alpha..travis-ci.org)|

[![npmPackageListing](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.npmPackageListing.svg)](https://github.com/kaizhu256/node-elasticsearch-lite)

![npmPackageDependencyTree](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.npmPackageDependencyTree.svg)



# table of contents
1. [cdn download](#cdn-download)
1. [live demo](#live-demo)
1. [documentation](#documentation)
1. [quickstart example.js](#quickstart-examplejs)
1. [all screenshots](#all-screenshots)
1. [package.json](#packagejson)
1. [changelog of last 50 commits](#changelog-of-last-50-commits)
1. [internal build script](#internal-build-script)
1. [misc](#misc)



# cdn download
- none



# live demo
- [http://h1-elasticsearch-beta.herokuapp.com](http://h1-elasticsearch-beta.herokuapp.com)

[![github.com test-server](https://github.com/kaizhu256/node-elasticsearch-lite/blob/gh-pages/build/screenshot.deployHeroku.browser.%252F.png)](http://h1-elasticsearch-beta.herokuapp.com)

- [http://h1-elasticsearch-beta.herokuapp.com/kibana/](http://h1-elasticsearch-beta.herokuapp.com/kibana/)

[![github.com test-server](https://github.com/kaizhu256/node-elasticsearch-lite/blob/gh-pages/build/screenshot.deployHeroku.browser.%252Fkibana%252F.png)](http://h1-elasticsearch-beta.herokuapp.com/kibana/)



# documentation
#### apidoc
- [https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/apidoc.html](https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/apidoc.html)

[![apidoc](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/apidoc.html)

#### swaggerdoc
- [http://h1-elasticsearch-beta.herokuapp.com/assets.swgg.html](http://h1-elasticsearch-beta.herokuapp.com/assets.swgg.html)

[![swaggerdoc](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.deployHeroku.browser.%252Fassets.swgg.html.png)](http://h1-elasticsearch-beta.herokuapp.com/assets.swgg.html)

#### todo
- persist file data at \$PWD/tmp/elasticsearch.data
- none

#### changelog for v2017.1.7
- npm publish 2017.6.1
- add kibana to buildApp
- enable cors in github
- initial working server
- none

#### this package requires
- darwin or linux os

#### additional info
- curl -XPOST 'localhost:9200/bank/account/_bulk?pretty' --data-binary @lib.elasticsearch.accounts.json
- curl -XPOST localhost:9200/_bulk --data-binary @lib.elasticsearch.shakespeare.json



# quickstart example.js
[![screenshot](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build/app/assets.example.html)

#### to run this example, follow the instruction in the script below
- [example.js](https://kaizhu256.github.io/node-elasticsearch-lite/build..beta..travis-ci.org/example.js)
```javascript
/*
example.js

this script will run a web demo of elasticsearch-lite

instruction
    1. save this script as example.js
    2. run the shell command:
        $ npm install elasticsearch-lite && PORT=8081 node example.js
    3. open a browser to http://127.0.0.1:8081 and play with the web demo
    4. edit this script to suit your needs
*/



/* istanbul instrument in package elasticsearch */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 8,
    maxlen: 96,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    if (global.utility2_rollup) {
        return;
    }
    require('elasticsearch-lite').serverStart({ port: Number(process.env.PORT) });
}());
```

#### output from browser
[![screenshot](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.testExampleJs.browser.%252F.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build/app/assets.example.html)

#### output from shell
![screenshot](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.testExampleJs.svg)



# all screenshots
1. [https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)
[![screenshot](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fapidoc.html.png)

1. [https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)
[![screenshot](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Fcoverage.lib.html.png)

1. [https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)
[![screenshot](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.buildCi.browser.%252Ftmp%252Fbuild%252Ftest-report.html.png)



# package.json
```json
{
    "author": "kai zhu <kaizhu256@gmail.com>",
    "bin": {
        "elasticsearch": "lib.elasticsearch.js"
    },
    "description": "this zero-dependency package will download and install the elasticsearch-v1.7.6 prebuilt-binary from https://download.elastic.co/elasticsearch/elasticsearch",
    "devDependencies": {
        "electron-lite": "kaizhu256/node-electron-lite#alpha",
        "utility2": "kaizhu256/node-utility2#alpha"
    },
    "engines": {
        "node": ">=4.0"
    },
    "homepage": "https://github.com/kaizhu256/node-elasticsearch-lite",
    "keywords": [
        "elasticsearch",
        "elasticsearch-lite",
        "search",
        "server"
    ],
    "license": "MIT",
    "main": "lib.elasticsearch.js",
    "name": "elasticsearch-lite",
    "nameAlias": "elasticsearch",
    "nameOriginal": "elasticsearch-lite",
    "os": [
        "darwin",
        "linux"
    ],
    "repository": {
        "type": "git",
        "url": "https://github.com/kaizhu256/node-elasticsearch-lite.git"
    },
    "scripts": {
        "build-ci": "utility2 shReadmeTest build_ci.sh",
        "env": "env",
        "heroku-postbuild": "npm install \"kaizhu256/node-utility2#alpha\"",
        "postinstall": "[ ! -f npm_scripts.sh ] || ./npm_scripts.sh postinstall",
        "start": "PORT=${PORT:-8080} utility2 start test.js",
        "test": "PORT=$(utility2 shServerPortRandom) utility2 test test.js"
    },
    "version": "2017.1.7"
}
```



# changelog of last 50 commits
[![screenshot](https://kaizhu256.github.io/node-elasticsearch-lite/build/screenshot.gitLog.svg)](https://github.com/kaizhu256/node-elasticsearch-lite/commits)



# internal build script
- build_ci.sh
```shell
# build_ci.sh

# this shell script will run the build for this package

shBuildCiAfter() {(set -e
    shDeployHeroku
    # screenshot
    MODE_BUILD=deployHeroku shBrowserTest \
        "http://h1-elasticsearch-$CI_BRANCH.herokuapp.com/kibana/" screenshot
    cp doc.html tmp/build/apidoc.html
    MODE_BUILD=buildCi shBrowserTest tmp/build/apidoc.html screenshot
    shReadmeTest example.sh
)}

shBuildCiBefore() {(set -e
    shNpmTestPublished
    shReadmeTest example.js
)}

# run shBuildCi
eval $(utility2 source)
shBuildCi
```



# misc
- this package was created with [utility2](https://github.com/kaizhu256/node-utility2)
