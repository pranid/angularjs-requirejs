/**
 * Created by praneeth on 9/3/2016.
 */
define(['./app'], function (app) {
    'use strict';

    return app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('vone', {
                url: '/vone',
                templateUrl: './partials/home/vone.html',
                controller: 'mainCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: './partials/main/login.html',
                controller: 'loginCtrl'
            });

        $urlRouterProvider.otherwise('login');
    });


});
