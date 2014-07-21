(function () {
    'use strict';

    angular.module('app').controller('jobController',
        ['$rootScope', '$scope', jobController]);

    function jobController($rootScope, $scope) {
        $rootScope.$on('$stateChangeStart', function () {
            $scope.slide = $scope.slide || 'slide-left'
        });
        $scope.message = "This is the Jobs page.";
        $scope.showAnimation = false;
    }
})();