(function () {
    'use strict';

    angular.module('app').controller('storeListController',
        ['$scope', storeListController]);

    function storeListController($scope) {
        $scope.message = "The following are the list of stores:";
        $scope.items = ["Store 1", "Store 2", "Store 3", "Store 4"];
    }
})();