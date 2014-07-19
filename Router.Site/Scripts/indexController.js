(function () {
    'use strict';

    angular.module('app').controller('indexController',
        ['$scope', indexController]);

    function indexController($scope) {
        $scope.totalItems = 100;
        $scope.currentPage;
    }
})();
