,$s/<\/body>\(.*\n\)\{-\}.*<body>//gc



,$s/id="guide"/class="guide"/gc

/<!--\(.*\n\)\{5\}.*-->$//gc
/<!--\(.*\n\)\{6\}.*-->$//gc
,$s/<!--.*-->//gc
,$s/\n\n\n*/\r\r/gc


,$s/<script\>/<noscript/gc
,$s/;/;\r/gc
,$s/#guide/.guide/gc
,$s/#guide\>/.guide/gc
,$s/#content/.content/gc
,$s/id="content"/class="content"/gc
,$s/href="\([a-bA-Z0-9_\-]*\).html"/href="#\1"/gc
,$s/href="\([\w\-]*\).html"/href="#\1"/gc
,$s/href="\(.\{-\}\).html"/href="#\1"/gc
,$s/\/body >/\/body>/gc

