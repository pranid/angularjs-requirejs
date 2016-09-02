/**
 * Created by praneeth on 9/3/2016.
 */
define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/vone', {
            templateUrl: './../system/partials/vone.html',
            controller: 'mainCtrl'
        });

        $routeProvider.when('/vtwo', {
            templateUrl: './../system/partials/vtwo.html',
            controller: 'mainCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/vone'
        });
    }]);
});
