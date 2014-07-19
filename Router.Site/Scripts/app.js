(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules 
        //'ngAnimate',        // animations
        //'ngRoute'           // routing

        // Custom modules 

        // 3rd Party Modules
        "ui.bootstrap",
        'ui.bootstrap.pagination'

    ]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();