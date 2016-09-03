/**
 * Created by praneeth on 9/3/2016.
 */
define(['./app'], function (app) {
    'use strict';
    app.config(function($stateProvider) {
        $stateProvider

            .state('vone', {
                url: '/vone',
                templateUrl: './../system/partials/vone.html',
                controller: 'mainCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: './../system/partials/login.html',
                controller: 'loginCtrl'
            });
    });

    app.config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('login');
    });

    return app;


});
