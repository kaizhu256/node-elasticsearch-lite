,$s/\n\n\n\n*/\r\r/gc

,$s/<\/body *>\(.*\n\)\{-\}.*<body *>//gc
483

,$s/<script\>/<script2/gc
,$s/\<script>/script2>/gc
7751

,$s/<script2\>\(.*\n\)\{-\}.*<\/script2>//gc
7751

,$s/<noscript\>\(.*\n\)\{-\}.*<\/noscript>//gc
968

[
    "#footer-subscribe",
    "#right_col",
    ".col-xs-12.col-sm-4.col-md-4",
    ".edit_me",
    ".footer-wrapper",
    ".nav-mobile-dropdown",
    ".navfooter",
    ".page_header",
    ".tertiary-nav",
    "body > link",
    "body style",
    "header",
    "noscript",
    "script",
    "script2",
].forEach(function (query) {
    Array.from(document.querySelectorAll(query)).forEach(function (element) {
        element.remove();
    })
});
document.documentElement.outerHTML

,$s/<!--.*-->$//gc
5324

,$s/<!--\(.*\n\)\{6\}.*-->$//gc
484

,$s/src="images\/\(\w*\)\.png"/class="images-\1-png"/gc
10
,$s/src="images\/\(\w*\)\/\(\w*\)\.png"/class="images-\1-\2-png"/gc
198
,$s/src="images\/\(\w*\)\/\(\w*\)\/\(\w*\)\.png"/class="images-\1-\2-\3-png"/gc
436


Array.from(document.querySelectorAll('[src]')).map(function (element) {
    return element.src.split('.').slice(-2).join('.')
}).sort().join('\n')

,$s/src="..tutorials\/\(\w*\)\/\(\w*\)\.png"/class="tutorials-\1-\2-png"/gc
,$s/ alt="[^"]*\.png"//gc
,$s/https:..f.cloud.github.com/https---f-cloud-github-com/gc
,$s/.4320215./-4320215-/gc

,$s/href="index.html">Elasticsearch Reference/href="#id-elasticsearch">Elasticsearch Reference/gc
414
,$s/href="index.html">Kibana User Guide/href="#id-kibana">Kibana User Guide/gc
67

,$s/href="#id-2">Elasticsearch Reference/href="#id-elasticsearch">Elasticsearch Reference/gc
414
,$s/href="#id-2">Kibana User Guide/href="#id-kibana">Kibana User Guide/gc
67
