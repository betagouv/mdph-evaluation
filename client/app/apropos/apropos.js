'use strict';

angular.module('evaluationApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('a_propos', {
        url: '/a_propos',
        templateUrl: 'app/apropos/apropos.html'
      });
  });
