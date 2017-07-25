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
        local.killElasticsearch = function () {
        /*
         * this function will kill elasticsearch
         */
            process.kill(local.global.utility2_processElasticsearch1.pid);
        };

        local.middlewareBulkPut = function (request, response, nextMiddleware) {
        /*
         * this function will run the middleware,
         * that will bulk upsert documents into elasticsearch
         */
            var options, tmp;
            options = {};
            local.onNext(options, function (error, data) {
                switch (options.modeNext) {
                case 1:
                    nextMiddleware = nextMiddleware || local.onErrorDefault;
                    if (!request) {
                        request = local.middlewareBulkPutList.shift();
                        if (!request) {
                            return;
                        }
                        local.middlewareBulkPut(request, null, nextMiddleware);
                        return;
                    }
                    if (!response) {
                        response = { end: local.nop };
                        options.onNext(null, request.data);
                        return;
                    }
                    // read request-body
                    local.streamReadAll(request, options.onNext);
                    break;
                case 2:
                    options.data = new Buffer(data).toString();
                    // forward-proxy request to elasticsearch
                    local.ajax({
                        data: options.data,
                        method: 'put',
                        url: local.serverLocalHostElasticsearch + request.url
                    }, options.onNext);
                    break;
                case 3:
                    // successful operation
                    if (data.responseText.slice(0, 256).indexOf(',"errors":false,') >= 0) {
                        response.end(data.responseText);
                        return;
                    }
                    // fallback
                    options.data = options.data.split('\n');
                    options.responseJson = JSON.parse(data.responseText);
                    options.result = '';
                    options.responseJson.items.forEach(function (element, ii) {
                        tmp = element.create || element.index;
                        if (tmp.status < 300) {
                            return;
                        }
                        tmp.status = tmp === element.create
                            ? 201
                            : 200;
                        options.result += JSON.stringify({
                            _id: tmp.id,
                            _index: tmp.index,
                            _type: tmp.type
                        }) + '\n';
                        options.result += options.data[2 * ii + 1] + '\n';
                    });
                    response.end(JSON.stringify(data.responseJson));
                    local.middlewareBulkPutList.push({
                        data: options.result,
                        url: request.url
                    });
                    break;
                default:
                    nextMiddleware(error);
                }
            });
            options.modeNext = 0;
            options.onNext();
        };

        local.middlewareRouterCustom = function (request, response, nextMiddleware) {
        /*
         * this function will run the middleware that will route elasticsearch requests
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
                local.serverRespondHeadSet(request, response, null, {
                    'content-type': 'application/json'
                });
                switch (request.swgg.crud.operationId) {
                // handle _bulk upsert
                case '/_bulk.put':
                case '/{index}/_bulk.put':
                case '/{index}/{type}/_bulk.put':
                    local.middlewareBulkPut(request, response, nextMiddleware);
                    return;
                }
                // forward-proxy request to elasticsearch
                requestBackend = local.http.request({
                    method: request.method,
                    path: request.swgg.crud.operationId === '/__info.get'
                        ? '/'
                        : request.url,
                    port: local.serverLocalHostElasticsearch.split(':')[2]
                }, function (_response) {
                    responseBackend = _response.on('error', nextMiddleware);
                    responseBackend.pipe(response);
                }).on('error', nextMiddleware);
                request.pipe(requestBackend);
            }
        };

        local.serverStart = function (options) {
            if (local.global.utility2_rollup || local.global.utility2_processElasticsearch1) {
                return;
            }
            // start server
            local.objectSetDefault(local.env, { PORT: '9200' });
            local.utility2.middlewareList = [
                local.middlewareInit,
                local.middlewareForwardProxy,
                local.middlewareAssetsCached,
                local.swgg.middlewareRouter,
                local.swgg.middlewareUserLogin,
                local.middlewareJsonpStateInit,
                local.middlewareRouterCustom,
                local.middlewareBodyRead,
                local.swgg.middlewareBodyParse,
                local.swgg.middlewareValidate,
                local.swgg.middlewareCrudBuiltin,
                local.swgg.middlewareCrudEnd
            ];
            local.testRunServer(local);
            // init assets - swgg
            local.assetsDict['/'] =
                local.assetsDict['/index.html'] =
                local.assetsDict['/assets.index.template.html'] =
                local.assetsDict['/assets.swgg.html'];
            local.assetsDict['/assets.swgg.swagger.json'] =
                local.fs.readFileSync(__dirname + '/assets.swgg.swagger.json');
            local.apiDictUpdate(require('./assets.swgg.swagger.json'));
            // init assets - kibana
            local.onReadyBefore.counter += 1;
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
                        case 'kibana/app/app.js':
                            data = 'var local={};local.githubCorsUrlOverride=' +
                                local.githubCorsUrlOverride.toString().trim() + ';\n' + data
                                .toString()
                                // githubCorsHost
                                .replace(
                                    'v.open(e,i,!0)',
                                    'v.open(e,local.githubCorsUrlOverride(i,' +
                                        '"https://h1-elasticsearch-alpha.herokuapp.com",' +
                                        '(/^(' +
                                        '\\/_\\w|' +
                                        '\\/[^\\/].*?\\/_\\w|' +
                                        '\\/kibana-int\\/' +
                                        ')/)),!0)'
                                );
                            break;
                        case 'kibana/config.js':
                            data = data
                                .toString()
                                // strip port 9200 from kibana
                                .replace('"http://"+window.location.hostname+":9200"', '""');
                            break;
                        case 'kibana/app/dashboards/logstash.json':
                            data = data
                                .toString()
                                // relax logstash index-filter
                                .replace('"interval": "day",', '"interval": "none",')
                                .replace(
                                    '"default": "NO_TIME_FILTER_OR_INDEX_PATTERN_NOT_MATCHED"',
                                    '"default": "_all"'
                                );
                            break;
                        }
                        local.assetsDict['/' + options2.element] = data;
                        onParallel();
                    });
                }, local.onReadyBefore);
            });
            // init serverLocalHostElasticsearch
            local.serverLocalHostElasticsearch = 'http://127.0.0.1:' +
                (Number(local.env.PORT) + 1);
            // start elasticsearch-server
            console.error('starting elasticsearch-server ...');
            local.onResetAfter(function () {
                local.onResetAfterElasticsearch = true;
            });
            local.onResetBefore.counter += 1;
            local.timerIntervalElasticsearchStatus = setInterval(function () {
                local.ajax({ url: local.serverLocalHostElasticsearch }, function (error) {
                    if (error) {
                        return;
                    }
                    clearInterval(local.timerIntervalElasticsearchStatus);
                    console.error('elasticsearch-server listening on http-port' +
                        local.serverLocalHostElasticsearch.split(':')[2]);
                    local.onResetBefore();
                });
            }, 1000);
            // init argv
            local.objectSetDefault(options, { argv: [] });
            [
                '-Des.http.port=' + local.serverLocalHostElasticsearch.split(':')[2],
                '-Des.path.data=' + process.cwd() + '/tmp/elasticsearch.data.' +
                    local.env.NODE_ENV,
                // coverage-hack - test redundant arg
                '',
                ''
            ].forEach(function (arg) {
                if (options.argv.indexOf(arg) < 0) {
                    options.argv.push(arg);
                }
            });
            local.global.utility2_processElasticsearch1 = local.child_process.spawn(
                __dirname + '/external/elasticsearch/bin/elasticsearch',
                options.argv,
                { stdio: ['ignore', 1, 2] }
            ).on('exit', local.exit);
            process.on('exit', local.killElasticsearch);
            // init middlewareBulkPutList
            local.middlewareBulkPutList = [];
            setInterval(local.middlewareBulkPut, 1000);
        };
    }());
    switch (local.modeJs) {



    // run node js-env code - init-after
    /* istanbul ignore next */
    case 'node':
        if (local.global.utility2_rollup) {
            break;
        }
        // init utility2
        local.utility2 = local.utility2 || require('./assets.utility2.rollup.js');
        local.utility2.objectSetDefault(local, local.utility2);
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
