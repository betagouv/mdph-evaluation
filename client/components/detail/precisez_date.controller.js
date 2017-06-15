'use strict';

angular.module('evaluationApp')
  .controller('PrecisezDateCtrl', function($scope) {
    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };
  });
