/**
 * Created by praneeth on 9/4/2016.
 */
define(['./../main.module'], function (main) {
    'use strict';
    var menu = main;


    menu.controller('menuCtrl', function ($scope, menuService) {
        var menus = menuService.get();
        $scope.name = 'Boo';
        console.log("MENU");
        console.info(menus);
    });
    return menu;
});