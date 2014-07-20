(function () {
    'use strict';

    angular.module('app').controller('storeListController',
        ['$scope', storeListController]);

    function storeListController($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
    }
})();