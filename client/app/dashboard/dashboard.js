'use strict';

angular.module('evaluationApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '',
        parent: 'layout',
        authenticate: true,
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboardCtrl',
      });
  });
