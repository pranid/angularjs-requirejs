/**
 * Created by praneeth on 9/2/2016.
 */
define([

    'angular',
    'ui-router',
    './home/controllers'

], function (angular) {
    'use strict';
    // console.log(angular);

    return angular.module('app', [
        'app.homeMod',
        'ui.router'
    ]);
});
