/**
 * Created by praneeth on 9/2/2016.
 */
define(['./homeMod'], function (homeMod) {
    'use strict';
    var home = homeMod;


    // return ng.module('app.controllers', []);
    home.controller('mainCtrl',['$scope', function($scope) {
        $scope.name='Boo';
    }]);
    return home;
});