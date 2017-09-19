/*! kibana - v3.1.3 - 2015-07-31
 * Copyright (c) 2015 Rashid Khan; Licensed Apache License */

define(["angular","lodash"],function(a,b){var c=a.module("kibana.factories");c.factory("storeFactory",function(){return function(a,c,d){if(!b.isFunction(a.$watch))throw new TypeError("Invalid scope.");if(!b.isString(c))throw new TypeError("Invalid name, expected a string that the is unique to this store.");if(d&&!b.isPlainObject(d))throw new TypeError("Invalid defaults, expected a simple object or nothing");d=d||{};var e=localStorage.getItem(c);if(null!=e)try{e=JSON.parse(e)}catch(f){e=null}if(null==e)e=b.clone(d);else{if(!b.isPlainObject(e))throw new TypeError("Invalid store value"+e);b.defaults(e,d)}return a[c]=e,a.$watch(c,function(e){void 0===e?(localStorage.removeItem(c),a[c]=b.clone(d)):localStorage.setItem(c,JSON.stringify(e))},!0),e}})});