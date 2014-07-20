(function () {
    'use strict';

    angular.module('app').controller('jobListController',
        ['$scope', jobListController]);

    function jobListController($scope) {
        $scope.message = "The following are the list of jobs:";
        $scope.items = ["Job 1", "Job 2", "Job 3", "Job 4"];
    }
})();