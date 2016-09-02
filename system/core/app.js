/**
 * Created by praneeth on 9/2/2016.
 */
define([

    'angular',
    'angular-route',
    './home/home.ctrl'

], function (angular) {
    'use strict';
    console.log(angular);

    return angular.module('app', [
        'app.homeMod',
        'ngRoute'
    ]);
});
