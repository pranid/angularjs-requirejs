/**
 * Created by praneeth on 9/3/2016.
 */

define(['./homeMod'], function (homeMod) {
    'use strict';
    // console.log(homeMod);
    var login = homeMod;


    // return ng.module('app.controllers', []);
    login.controller('loginCtrl',['$scope', function($scope) {
        $scope.name='Boo';
        console.log($scope.name);
    }]);
    return login;
});
