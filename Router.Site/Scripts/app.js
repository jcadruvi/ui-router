(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/jobs");
        //
        // Now set up the states
        $stateProvider
          .state('jobs', {
              url: "/jobs",
              templateUrl: "/Home/jobs.html"
          })
          .state('jobs.list', {
              url: "/jobs/list",
              templateUrl: "/Home/jobs-list.html",
              controller: function ($scope) {
                  $scope.items = ["A", "List", "Of", "Items"];
              }
          })
          .state('stores', {
              url: "/stores",
              templateUrl: "/Home/stores.html"
          })
          .state('stores.list', {
              url: "/stores/list",
              templateUrl: "/Home/stores-list.html",
              controller: function ($scope) {
                  $scope.things = ["A", "Set", "Of", "Things"];
              }
          })
    });
})();