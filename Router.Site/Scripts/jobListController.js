(function () {
    'use strict';

    angular.module('app').controller('jobListController',
        ['$scope', jobListController]);

    function jobListController($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
    }
})();