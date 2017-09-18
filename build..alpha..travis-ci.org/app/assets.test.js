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
    var local;



    // run shared js-env code - init-before
    (function () {
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // re-init local
        local = local.global.local = (local.global.utility2 ||
            require('./assets.utility2.rollup.js')).requireReadme();
        // init test
        local.testRunInit(local);
    }());



    // run shared js-env code - function
    (function () {
        local.testCase_middlewareRouterCustom_default = function (options, onError) {
        /*
         * this function will test middlewareRouterCustom's default handling-behavior
         */
            options = {
                list: [{
                    method: 'GET',
                    url: '/__info'
                }, {
                    method: 'GET',
                    url: '/_alias'
                }, {
                    method: 'PUT',
                    data: '{"index":{"_id":null,"_index":"server_log","_type":"test"}}\n{}\n',
                    url: '/_bulk'
                }, {
                    method: 'GET',
                    url: '/kibana'
                }, {
                    method: 'GET',
                    url: '/kibana/'
                }, {
                    method: 'OPTIONS',
                    url: '/undefined'
                }]
            };
            local.onParallelList(options, function (options2, onParallel) {
                onParallel.counter += 1;
                local.ajax(options2.element, onParallel);
            }, onError);
        };
    }());
    switch (local.modeJs) {



    // run browser js-env code - function
    case 'browser':
        break;



    // run node js-env code - function
    case 'node':
        local.testCase_buildApp_default = function (options, onError) {
        /*
         * this function will test buildApp's default handling-behavior
         */
            local.testCase_buildReadme_default(options, local.onErrorThrow);
            local.testCase_buildLib_default(options, local.onErrorThrow);
            local.testCase_buildTest_default(options, local.onErrorThrow);
            local.testCase_buildCustomOrg_default(options, local.onErrorThrow);
            options = [{
                file: '/kibana/app/app.js',
                url: '/kibana/app/app.js'
            }, {
                file: '/kibana/config.js',
                url: '/kibana/config.js'
            }, {
                file: '/kibana/app/dashboards/logstash.json',
                url: '/kibana/app/dashboards/logstash.json'
            }];
            local.buildApp(options, onError);
            local.child_process.execSync(
                'mkdir -p tmp/build/app/ && cp -a external/kibana tmp/build/app/',
                { stdio: ['ignore', 2, 2] }
            );
        };

        local.testCase_killElasticsearch_default = function (options, onError) {
        /*
         * this function will test killElasticsearch's default handling-behavior
         */
            options = [
                [process, { kill: local.nop }]
            ];
            local.testMock(options, function (onError) {
                local.killElasticsearch();
                onError();
            }, onError);
        };

        local.testCase_middlewareBulkPut_default = function (options, onError) {
        /*
         * this function will test middlewareBulkPut's default handling-behavior
         */
            options = {
                list: [{
                    method: 'GET',
                    url: '/__info'
                }, {
                    method: 'GET',
                    url: '/_alias'
                }, {
                    method: 'PUT',
                    data: '{"index":{"_id":null,"_index":"server_log","_type":"test"}}\n{}\n',
                    url: '/_bulk'
                }, {
                    method: 'GET',
                    url: '/kibana'
                }, {
                    method: 'GET',
                    url: '/kibana/'
                }, {
                    method: 'OPTIONS',
                    url: '/undefined'
                }]
            };
            local.onParallelList(options, function (options2, onParallel) {
                onParallel.counter += 1;
                local.ajax(options2.element, onParallel);
            }, onError);
        };

        // coverage-hack - re-run serverStart
        local.serverStart();
        break;
    }
    switch (local.modeJs) {



    // run browser js-env code - init-test
    /* istanbul ignore next */
    case 'browser':
        // run tests
        if (local.modeTest && document.querySelector('#testRunButton1')) {
            if (!local.testRunBrowser) {
                local.testRunBrowser = function () {
                    local.testRunDefault(local);
                };
                document.querySelector('#testRunButton1')
                    .addEventListener('click', local.testRunBrowser);
            }
            document.querySelector('#testRunButton1').click();
        }
        break;



    // run node js-env code - init-test
    /* istanbul ignore next */
    case 'node':
        // run test-server
        local.testRunServer(local);
        break;
    }
}());
