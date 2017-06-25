,$s/\n\n\n\n*/\r\r/gc

,$s/<\/body *>\(.*\n\)\{-\}.*<body *>//gc
483

,$s/<script\>/<script2/gc
,$s/\<script>/script2>/gc
7751

,$s/<script2\>\(.*\n\)\{-\}.*<\/script2>//gc
7751

,$s/<iframe\>\(.*\n\)\{-\}.*<\/iframe>//gc
484

,$s/<noscript\>/<noscript3/gc
,$s/\<noscript>/noscript3>/gc
968

[
  'script2',
  'noscript'
].forEach(function (query) {
    Array.from(document.querySelectorAll(query)).forEach(function (element) {
        element.remove();
    })
});
document.documentElement.outerHTML
