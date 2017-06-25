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
