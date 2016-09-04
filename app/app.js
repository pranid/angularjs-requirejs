/**
 * Created by praneeth on 9/2/2016.
 */
define([

    'angular',
    'ui-router',
    '../modules/main/main.pack'
], function (angular) {
    'use strict';
    // console.log(angular);

    return angular.module('app', [
        'app.main',
        'ui.router'
    ]);
});
