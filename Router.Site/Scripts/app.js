(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', ['ui.router', 'ngAnimate']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/jobs");
        //
        // Now set up the states
        $stateProvider
          .state('jobs', {
              url: "/jobs",
              templateUrl: "/Home/jobs.html",
              controller: 'jobController'
          })
          .state('jobs.list', {
              url: "/list",
              templateUrl: "/Home/jobList.html",
              controller: 'jobListController'
          })
          .state('stores', {
              url: "/stores",
              templateUrl: "/Home/stores.html",
              controller: 'storeController'
          })
          .state('stores.list', {
              url: "/list",
              templateUrl: "/Home/storeList.html",
              controller: 'storeListController'
          })
    });
})();