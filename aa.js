/\n\n\n\n*/\r\r/gc

/<\/body *>\(.*\n\)\{-\}.*<body *>//gc
483 substitutions on 483 lines

/<script\>/<script2/gc
/\<script>/script2>/gc
7751

[
  'script2'
].forEach(function (query) {
    Array.from(document.querySelectorAll(query)).forEach(function (element) {
        element.remove();
    })
});
