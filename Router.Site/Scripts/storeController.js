(function () {
    'use strict';

    angular.module('app').controller('storeController',
        ['$scope', storeController]);

    function storeController($scope) {
        $scope.message = "This is the Stores page.";
    }
})();