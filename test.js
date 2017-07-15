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
    /* istanbul ignore next */
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
        switch (local.modeJs) {
        // re-init local from window.local
        case 'browser':
            local = local.global.utility2.objectSetDefault(
                local.global.utility2_rollup || local.global.local,
                local.global.utility2
            );
            break;
        // re-init local from example.js
        case 'node':
            local = (local.global.utility2_rollup ||
                require('./assets.utility2.rollup.js')).requireReadme();
            break;
        }
        // init exports
        local.global.local = local;
    }());



    // run shared js-env code - function
    (function () {
        return;
    }());
    switch (local.modeJs) {



    // run browser js-env code - function
    /* istanbul ignore next */
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
            }];
            local.buildApp(options, onError);
            local.child_process.execSync(
                'mkdir -p tmp/build/app/ && cp -a external/kibana tmp/build/app/',
                { stdio: ['ignore', 2, 2] }
            );
        };

        local.testCase_webpage_default = function (options, onError) {
        /*
         * this function will test webpage's default handling-behavior
         */
            onError(null, options);
        };

        local.utility2.testRunBefore = function () {
            local.objectSetDefault(local.elasticsearch, local);
        };
        break;
    }



    // run shared js-env code - init-after
    (function () {
        return;
    }());
    switch (local.modeJs) {



    // run browser js-env code - init-after
    /* istanbul ignore next */
    case 'browser':
        local.testCase_browser_nullCase = local.testCase_browser_nullCase || function (
            options,
            onError
        ) {
        /*
         * this function will test browser's null-case handling-behavior
         */
            onError(null, options);
        };

        local.utility2.ajaxForwardProxyUrlTest = local.utility2.ajaxForwardProxyUrlTest ||
            function (url, location) {
            /*
             * this function will test if the url requires forward-proxy
             */
                // jslint-hack
                local.nop(url);
                return local.env.npm_package_nameAlias && (/\bgithub.io$/).test(location.host)
                    ? 'https://h1-' + local.env.npm_package_nameAlias + '-alpha.herokuapp.com'
                    : location.protocol + '//' + location.host;
            };

        // run tests
        if (local.modeTest && document.querySelector('#testRunButton1')) {
            document.querySelector('#testRunButton1').click();
        }
        break;



    // run node js-env code - init-after
    /* istanbul ignore next */
    case 'node':
        local.testCase_buildApidoc_default = local.testCase_buildApidoc_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildApidoc's default handling-behavior
         */
            options = { modulePathList: module.paths };
            local.buildApidoc(options, onError);
        };

        local.testCase_buildApp_default = local.testCase_buildApp_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildApp's default handling-behavior
         */
            local.testCase_buildReadme_default(options, local.onErrorThrow);
            local.testCase_buildLib_default(options, local.onErrorThrow);
            local.testCase_buildTest_default(options, local.onErrorThrow);
            local.testCase_buildCustomOrg_default(options, local.onErrorThrow);
            options = [];
            local.buildApp(options, onError);
        };

        local.testCase_buildCustomOrg_default = local.testCase_buildCustomOrg_default ||
            function (options, onError) {
            /*
             * this function will test buildCustomOrg's default handling-behavior
             */
                options = {};
                local.buildCustomOrg(options, onError);
            };

        local.testCase_buildLib_default = local.testCase_buildLib_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildLib's default handling-behavior
         */
            options = {};
            local.buildLib(options, onError);
        };

        local.testCase_buildReadme_default = local.testCase_buildReadme_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildReadme's default handling-behavior
         */
            options = {};
            local.buildReadme(options, onError);
        };

        local.testCase_buildTest_default = local.testCase_buildTest_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildTest's default handling-behavior
         */
            options = {};
            local.buildTest(options, onError);
        };

        local.testCase_webpage_default = local.testCase_webpage_default || function (
            options,
            onError
        ) {
        /*
         * this function will test webpage's default handling-behavior
         */
            options = { modeCoverageMerge: true, url: local.serverLocalHost + '?modeTest=1' };
            local.browserTest(options, onError);
        };

        // run test-server
        local.testRunServer(local);
        break;
    }
}());
