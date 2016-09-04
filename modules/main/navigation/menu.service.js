/**
 * Created by praneeth on 9/4/2016.
 */
define(['./../main.module'], function (main) {
    'use strict';
    main.factory('menuService', function () {
        var menu = {};
        menu.get = function () {
            return {menu: 'Hello'};
        };
        return menu;
    });
    return main;
});