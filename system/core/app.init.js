/**
 * Created by praneeth on 9/3/2016.
 */
define([
    'require',
    'angular',
    'app',
    './app.routes'
], function (require, ng) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
