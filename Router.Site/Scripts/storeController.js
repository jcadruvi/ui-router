(function () {
    'use strict';

    angular.module('app').controller('storeController',
        ['$rootScope', '$scope', storeController]);

    function storeController($rootScope, $scope) {
        $rootScope.$on('$stateChangeStart', function () {
            $scope.slide = $scope.slide || 'slide-left'
        });
        $scope.message = "This is the Stores page.";
    }
})();