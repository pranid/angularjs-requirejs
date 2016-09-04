/**
 * Created by praneeth on 9/3/2016.
 */
define(['./app'], function (app) {
    'use strict';

    return app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('vone', {
                url: '/vone',
                templateUrl: './partials/user/vone.html',
                controller: 'mainCtrl'
            })
            .state('template', {
                abstract: true,
                controller: function ($scope) {
                    console.error("TEMPLATE");
                },
                views: {
                    '': {
                        templateUrl: './partials/main/template.html'
                    },
                    'menu@template': {
                        templateUrl: './partials/main/navigation/menu.html',
                        controller: 'menuCtrl'
                    },
                    'nav-bar@template': {
                        templateUrl: './partials/main/navigation/nav-bar.html',
                        controller: function ($scope) {
                            console.log("NAV_BAR");
                        }
                    }
                }
            })
            .state('template.dashboard', {
                url: '/dashboard',
                templateUrl: './partials/main/dashboard.html',
                controller: function ($scope) {
                    console.log("DASH B");
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: './partials/main/login.html',
                controller: 'loginCtrl'
            });

        $urlRouterProvider.otherwise('/dashboard');
    });


});
