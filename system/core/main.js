/**
 * Created by praneeth on 9/2/2016.
 */

require.config({

    paths: {
        'angular': '../lib/angular/angular.min',
        'angular-route': '../lib/angular/angular-route.min',
        'domReady': '../lib/requirejs/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
       './bootstrap'
    ]
});
