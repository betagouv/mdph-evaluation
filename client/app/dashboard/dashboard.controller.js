'use strict';

angular.module('evaluationApp')
  .controller('DashboardCtrl', function($scope, $state, currentUser) {
    this.mdph  = currentUser.mdph;
  });
