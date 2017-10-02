# example.sh

# this shell script will auto-generate documentation for the mysql npm-package with zero-config

# 1. npm install elasticsearch-lite
npm install elasticsearch-lite
# 2. start elasticsearch server on PORT=9200
PORT=9200 node_modules/.bin/elasticsearch
# 3. open a browser to http://127.0.0.1:9200 to play with elasticsearch api
# 3. open a browser to http://127.0.0.1:9200/kibana/index.html#/dashboard/file/logstash.json to play with kibana and logstash
