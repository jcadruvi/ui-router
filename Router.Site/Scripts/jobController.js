(function () {
    'use strict';

    angular.module('app').controller('jobController',
        ['$scope', jobController]);

    function jobController($scope) {
        $scope.message = "This is the Jobs page.";
    }
})();