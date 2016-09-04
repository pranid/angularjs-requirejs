/**
 * Created by praneeth on 9/2/2016.
 */

require.config({

    paths: {
        'angular': './lib/angular/angular.min',
        'angular-route': './lib/angular/angular-route.min',
        'ui-router': './lib/angular/angular-ui-router.min',
        'domReady': './lib/requirejs/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see app.init.js
        './app/app.init'
    ]
});
