#!/usr/bin/env node
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
        // init utility2_rollup
        local = local.global.utility2_rollup || local;
        // init lib
        local.local = local.elasticsearch = local;
        // init exports
        if (local.modeJs === 'browser') {
            local.global.utility2_elasticsearch = local;
        } else {
            module.exports = local;
            module.exports.__dirname = __dirname;
            module.exports.module = module;
        }
    }());



    // run shared js-env code - function
    (function () {
        local.middlewareRouter = function (request, response, nextMiddleware) {
        /*
         * this function will run the route elasticsearch requests
         */
            var requestBackend, responseBackend;
            switch (request.urlParsed.pathname) {
            // redirect to kibana
            case '/kibana':
            case '/kibana/':
                response.writeHead(307, {
                    location: '/kibana/index.html' + (request.urlParsed.search || '')
                });
                response.end();
                break;
            default:
                local.serverRespondCors(request, response);
                if (request.method === 'OPTIONS') {
                    response.end();
                    return;
                }
                requestBackend = local.http.request({
                    method: request.method,
                    path: request.url,
                    port: local.port + 1
                }, function (_response) {
                    responseBackend = _response.on('error', nextMiddleware);
                    responseBackend.pipe(response);
                }).on('error', nextMiddleware);
                request.pipe(requestBackend);
            }
        };

        local.serverStart = function (options) {
            if (local.global.utility2_processElasticsearch1) {
                return;
            }
            local.onReadyBefore.counter += 1;
            // init assets kibana
            local.child_process.exec('find kibana', {
                cwd: __dirname + '/external'
            }, function (error, data) {
                // validate no error occurred
                local.assert(!error, error);
                local.onParallelList({
                    list: data.toString().split('\n')
                }, function (options2, onParallel) {
                    onParallel.counter += 1;
                    local.fs.readFile(__dirname + '/external/' + options2.element, function (
                        error,
                        data
                    ) {
                        if (error) {
                            onParallel();
                            return;
                        }
                        switch (options2.element) {
                        // githubCorsHost
                        case 'kibana/app/app.js':
                            data = 'var local={};local.githubCorsUrlOverride=' +
                                local.githubCorsUrlOverride.toString().trim() + ';\n' + data
                                .toString()
                                .replace(
                                    'v.open(e,i,!0)',
                                    'v.open(e,local.githubCorsUrlOverride(i,' +
                                        '"https://h1-elasticsearch-alpha.herokuapp.com",' +
                                        '(/(^\\/_\\w|^\\/[^\\/].*?\\/_\\w)/)),!0)'
                                );
                            break;
                        // strip port 9200 from kibana
                        case 'kibana/config.js':
                            data = data
                                .toString()
                                .replace('"http://"+window.location.hostname+":9200"', '""');
                            break;
                        }
                        local.assetsDict['/' + options2.element] = data;
                        onParallel();
                    });
                }, local.onReadyBefore);
            });
            // start elasticsearch
            local.objectSetDefault(options, {
                argv: [],
                port: Number(process.env.PORT) || 9200
            });
            [
                '-Des.http.port=' + (options.port + 1),
                '-Des.path.data=' + process.cwd() + '/tmp/elasticsearch.data.' +
                    process.env.NODE_ENV
            ].forEach(function (arg) {
                if (process.argv.indexOf(arg) < 0) {
                    options.argv.push(arg);
                }
            });
            local.objectSetDefault(local, options);
            local.global.utility2_processElasticsearch1 = local.child_process.spawn(
                __dirname + '/external/elasticsearch/bin/elasticsearch',
                local.argv,
                { stdio: [0, 1, 2] }
            ).on('exit', function (exitCode) {
                process.exit(exitCode);
            });
            process.on('exit', function () {
                process.kill(local.global.utility2_processElasticsearch1.pid);
            });
            // start server
            local.utility2.middlewareList = local.utility2.middlewareList || [
                local.middlewareInit,
                local.middlewareForwardProxy,
                local.middlewareAssetsCached,
                local.middlewareJsonpStateInit,
                local.middlewareRouter
            ];
            local.testRunServer(local);
        };
    }());
    switch (local.modeJs) {



    // run node js-env code - init-after
    /* istanbul ignore next */
    case 'node':
        if (local.global.utility2_rollup) {
            return;
        }
        // init utility2
        local.utility2 = local.utility2 || require('./assets.utility2.rollup.js');
        local.utility2.objectSetDefault(local, local.utility2);
        // init assets
        local.assetsDict['/'] = local.assetsDict['/index.html'] =
            local.assetsDict['/assets.swgg.html'];
        local.assetsDict['/assets.swgg.swagger.json'] =
            local.fs.readFileSync(__dirname + '/assets.swgg.swagger.json');
        // run the cli
        if (module !== require.main || local.global.utility2_rollup) {
            break;
        }
        local.serverStart({ argv: process.argv.slice(2) });
        // init exports
        local.global.local = local;
        // start repl-debugger
        local.replStart();
        break;
    }
}());
