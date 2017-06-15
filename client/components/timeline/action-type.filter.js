'use strict';

angular.module('evaluationApp')
  .filter('actionTypeIconFilter', function(actionTypes) {
    return function(input) {
      return actionTypes[input.action].fa;
    };
  });

